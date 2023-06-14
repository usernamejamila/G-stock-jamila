package  ma.sir.easystock.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.sir.easystock.zynerator.util.ListUtil;


import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.converter.AbstractConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.history.CommandeHistory;
import ma.sir.easystock.bean.core.Commande;
import ma.sir.easystock.ws.dto.CommandeDto;

@Component
public class CommandeConverter extends AbstractConverter<Commande, CommandeDto, CommandeHistory> {

    @Autowired
    private StoreConverter storeConverter ;
    @Autowired
    private ProduitConverter produitConverter ;
    @Autowired
    private CommandeItemConverter commandeItemConverter ;
    @Autowired
    private EtatCommandeConverter etatCommandeConverter ;
    private boolean store;
    private boolean etatCommande;
    private boolean commandeItems;

    public  CommandeConverter(){
        super(Commande.class, CommandeDto.class, CommandeHistory.class);
        init(true);
    }

    @Override
    public Commande toItem(CommandeDto dto) {
        if (dto == null) {
            return null;
        } else {
        Commande item = new Commande();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());
            if(StringUtil.isNotEmpty(dto.getDateCommande()))
                item.setDateCommande(DateUtil.stringEnToDate(dto.getDateCommande()));
            if(StringUtil.isNotEmpty(dto.getTotal()))
                item.setTotal(dto.getTotal());
            if(StringUtil.isNotEmpty(dto.getTotale()))
                item.setTotale(dto.getTotale());
            if(StringUtil.isNotEmpty(dto.getTotalePayeCheque()))
                item.setTotalePayeCheque(dto.getTotalePayeCheque());
            if(StringUtil.isNotEmpty(dto.getTotalePayeEspece()))
                item.setTotalePayeEspece(dto.getTotalePayeEspece());
            if(this.store && dto.getStore()!=null)
                item.setStore(storeConverter.toItem(dto.getStore())) ;

            if(this.etatCommande && dto.getEtatCommande()!=null)
                item.setEtatCommande(etatCommandeConverter.toItem(dto.getEtatCommande())) ;


            if(this.commandeItems && ListUtil.isNotEmpty(dto.getCommandeItems()))
                item.setCommandeItems(commandeItemConverter.toItem(dto.getCommandeItems()));

        return item;
        }
    }

    @Override
    public CommandeDto toDto(Commande item) {
        if (item == null) {
            return null;
        } else {
            CommandeDto dto = new CommandeDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());
            if(item.getDateCommande()!=null)
                dto.setDateCommande(DateUtil.dateTimeToString(item.getDateCommande()));
            if(StringUtil.isNotEmpty(item.getTotal()))
                dto.setTotal(item.getTotal());
            if(StringUtil.isNotEmpty(item.getTotale()))
                dto.setTotale(item.getTotale());
            if(StringUtil.isNotEmpty(item.getTotalePayeCheque()))
                dto.setTotalePayeCheque(item.getTotalePayeCheque());
            if(StringUtil.isNotEmpty(item.getTotalePayeEspece()))
                dto.setTotalePayeEspece(item.getTotalePayeEspece());
        if(this.store && item.getStore()!=null) {
            dto.setStore(storeConverter.toDto(item.getStore())) ;
        }
        if(this.etatCommande && item.getEtatCommande()!=null) {
            dto.setEtatCommande(etatCommandeConverter.toDto(item.getEtatCommande())) ;
        }
        if(this.commandeItems && ListUtil.isNotEmpty(item.getCommandeItems())){
            commandeItemConverter.init(true);
            commandeItemConverter.setCommande(false);
            dto.setCommandeItems(commandeItemConverter.toDto(item.getCommandeItems()));
            commandeItemConverter.setCommande(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.commandeItems = value;
    }

    public void initObject(boolean value) {
        this.store = value;
        this.etatCommande = value;
    }


    public StoreConverter getStoreConverter(){
        return this.storeConverter;
    }
    public void setStoreConverter(StoreConverter storeConverter ){
        this.storeConverter = storeConverter;
    }
    public ProduitConverter getProduitConverter(){
        return this.produitConverter;
    }
    public void setProduitConverter(ProduitConverter produitConverter ){
        this.produitConverter = produitConverter;
    }
    public CommandeItemConverter getCommandeItemConverter(){
        return this.commandeItemConverter;
    }
    public void setCommandeItemConverter(CommandeItemConverter commandeItemConverter ){
        this.commandeItemConverter = commandeItemConverter;
    }
    public EtatCommandeConverter getEtatCommandeConverter(){
        return this.etatCommandeConverter;
    }
    public void setEtatCommandeConverter(EtatCommandeConverter etatCommandeConverter ){
        this.etatCommandeConverter = etatCommandeConverter;
    }
    public boolean  isStore(){
        return this.store;
    }
    public void  setStore(boolean store){
        this.store = store;
    }
    public boolean  isEtatCommande(){
        return this.etatCommande;
    }
    public void  setEtatCommande(boolean etatCommande){
        this.etatCommande = etatCommande;
    }
    public boolean  isCommandeItems(){
        return this.commandeItems ;
    }
    public void  setCommandeItems(boolean commandeItems ){
        this.commandeItems  = commandeItems ;
    }
}
