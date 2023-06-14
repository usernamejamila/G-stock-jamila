package ma.sir.easystock.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.PaiementCommande;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.PaiementCommande;

import java.math.BigDecimal;
import java.util.List;


@Repository
public interface PaiementCommandeDao extends AbstractRepository<PaiementCommande,Long>  {
    PaiementCommande findByReference(String reference);
    int deleteByReference(String reference);

    List<PaiementCommande> findByCommandeId(Long id);
    int deleteByCommandeId(Long id);
    List<PaiementCommande> findByModePaiementId(Long id);
    int deleteByModePaiementId(Long id);
    List<PaiementCommande> findByEtatPaiementCommandeId(Long id);
    int deleteByEtatPaiementCommandeId(Long id);

    @Query("SELECT NEW PaiementCommande(item.id,item.reference) FROM PaiementCommande item")
    List<PaiementCommande> findAllOptimized();

    @Query("select sum(t.montant)from PaiementCommande t  where  extract(month from t.datePaiement)=:month AND extract(year from t.datePaiement)=:year")
    BigDecimal calculStatic(@Param("year") int year , @Param("month") int month );

}
