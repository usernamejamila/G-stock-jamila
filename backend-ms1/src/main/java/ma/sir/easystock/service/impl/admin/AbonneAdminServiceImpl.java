package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.Abonne;
import ma.sir.easystock.bean.history.AbonneHistory;
import ma.sir.easystock.dao.criteria.core.AbonneCriteria;
import ma.sir.easystock.dao.criteria.history.AbonneHistoryCriteria;
import ma.sir.easystock.dao.facade.core.AbonneDao;
import ma.sir.easystock.dao.facade.history.AbonneHistoryDao;
import ma.sir.easystock.dao.specification.core.AbonneSpecification;
import ma.sir.easystock.service.facade.admin.AbonneAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;

import ma.sir.easystock.zynerator.util.VelocityPdf;
import ma.sir.easystock.ws.dto.AbonneDto;
import org.springframework.http.HttpEntity;

import org.springframework.beans.factory.annotation.Autowired;




import java.util.List;
@Service
public class AbonneAdminServiceImpl extends AbstractServiceImpl<Abonne,AbonneHistory, AbonneCriteria, AbonneHistoryCriteria, AbonneDao,
AbonneHistoryDao> implements AbonneAdminService {
    public static final String TEMPLATE = "template/abonne.vm";
    public static final String FILE_NAME = "abonne.pdf";

    @Override
    public HttpEntity<byte[]> createPdf(AbonneDto dto) throws Exception{
        return velocityPdf.createPdf(FILE_NAME, TEMPLATE, dto);
    }


    public Abonne findByReferenceEntity(Abonne t){
        return  dao.findByCode(t.getCode());
    }





    public void configure() {
        super.configure(Abonne.class,AbonneHistory.class, AbonneHistoryCriteria.class, AbonneSpecification.class);
    }

    @Autowired
    private VelocityPdf velocityPdf;

    public AbonneAdminServiceImpl(AbonneDao dao, AbonneHistoryDao historyDao) {
        super(dao, historyDao);
    }

}