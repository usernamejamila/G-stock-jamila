package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.Commande;
import ma.sir.easystock.bean.core.EtatCommande;
import ma.sir.easystock.bean.history.CommandeHistory;
import ma.sir.easystock.dao.criteria.core.CommandeCriteria;
import ma.sir.easystock.dao.criteria.history.CommandeHistoryCriteria;
import ma.sir.easystock.dao.facade.core.CommandeDao;
import ma.sir.easystock.dao.facade.history.CommandeHistoryDao;
import ma.sir.easystock.dao.specification.core.CommandeSpecification;
import ma.sir.easystock.service.facade.admin.CommandeAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

import ma.sir.easystock.zynerator.util.VelocityPdf;
import ma.sir.easystock.ws.dto.CommandeDto;
import org.springframework.http.HttpEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.sir.easystock.bean.core.CommandeItem;

import ma.sir.easystock.service.facade.admin.StoreAdminService ;
import ma.sir.easystock.service.facade.admin.CommandeItemAdminService ;
import ma.sir.easystock.service.facade.admin.EtatCommandeAdminService ;


import java.util.List;
@Service
public class CommandeAdminServiceImpl extends AbstractServiceImpl<Commande,CommandeHistory, CommandeCriteria, CommandeHistoryCriteria, CommandeDao,
CommandeHistoryDao> implements CommandeAdminService {
    public static final String TEMPLATE = "template/commande.vm";
    public static final String FILE_NAME = "commande.pdf";

    @Override
    public HttpEntity<byte[]> createPdf(CommandeDto dto) throws Exception{
        return velocityPdf.createPdf(FILE_NAME, TEMPLATE, dto);
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Commande create(Commande t) {
        calculeTotal(t);
        initEtat(t);
        super.create(t);
        if (t.getCommandeItems() != null) {
            t.getCommandeItems().forEach(element-> {
                element.setCommande(t);
                commandeItemService.create(element);
            });
        }
        return t;
    }
    private void calculeTotal(Commande commande) {
        BigDecimal total = BigDecimal.ZERO ;
        List<CommandeItem> commandeItems = commande.getCommandeItems();
        if (commandeItems != null) {
            for (CommandeItem commandeItem : commandeItems) {
                total = total.add(commandeItem.getPrix().multiply(commandeItem.getQuantite()));
            }
        }
        commande.setTotal(total);
    }
    private void  initEtat(Commande commande) {
        EtatCommande etatCommande = new EtatCommande();
        etatCommande.setLibelle("INITIAL");
        EtatCommande etatCommande1= etatCommandeService.findOrSave(etatCommande);
        commande.setEtatCommande(etatCommande1);
    }


    public Commande findWithAssociatedLists(Long id){
        Commande result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setCommandeItems(commandeItemService.findByCommandeId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        commandeItemService.deleteByCommandeId(id);
    }


    public void updateWithAssociatedLists(Commande commande){
    if(commande !=null && commande.getId() != null){
            List<List<CommandeItem>> resultCommandeItems= commandeItemService.getToBeSavedAndToBeDeleted(commandeItemService.findByCommandeId(commande.getId()),commande.getCommandeItems());
            commandeItemService.delete(resultCommandeItems.get(1));
            ListUtil.emptyIfNull(resultCommandeItems.get(0)).forEach(e -> e.setCommande(commande));
            commandeItemService.update(resultCommandeItems.get(0),true);
    }
    }

    public Commande findByReferenceEntity(Commande t){
        return  dao.findByReference(t.getReference());
    }

    public List<Commande> findByStoreId(Long id){
        return dao.findByStoreId(id);
    }
    public int deleteByStoreId(Long id){
        return dao.deleteByStoreId(id);
    }
    public List<Commande> findByEtatCommandeId(Long id){
        return dao.findByEtatCommandeId(id);
    }
    public int deleteByEtatCommandeId(Long id){
        return dao.deleteByEtatCommandeId(id);
    }




    public void configure() {
        super.configure(Commande.class,CommandeHistory.class, CommandeHistoryCriteria.class, CommandeSpecification.class);
    }

    @Autowired
    private StoreAdminService storeService ;
    @Autowired
    private CommandeItemAdminService commandeItemService ;
    @Autowired
    private EtatCommandeAdminService etatCommandeService ;
    @Autowired
    private VelocityPdf velocityPdf;

    public CommandeAdminServiceImpl(CommandeDao dao, CommandeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}