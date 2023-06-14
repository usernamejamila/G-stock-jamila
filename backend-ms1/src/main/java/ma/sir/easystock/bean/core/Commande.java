package ma.sir.easystock.bean.core;

import java.util.Objects;
import java.util.List;

import java.time.LocalDateTime;


import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "commande")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="commande_seq",sequenceName="commande_seq",allocationSize=1, initialValue = 1)
public class Commande   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String reference;
    private LocalDateTime dateCommande ;
    private BigDecimal total = BigDecimal.ZERO;
    private BigDecimal totale = BigDecimal.ZERO;
    private BigDecimal totalePayeCheque = BigDecimal.ZERO;
    private BigDecimal totalePayeEspece = BigDecimal.ZERO;

    private Store store ;
    
    private EtatCommande etatCommande ;
    

    private List<CommandeItem> commandeItems ;

    public Commande(){
        super();
    }

    public Commande(Long id,String reference){
        this.id = id;
        this.reference = reference ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="commande_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public LocalDateTime getDateCommande(){
        return this.dateCommande;
    }
    public void setDateCommande(LocalDateTime dateCommande){
        this.dateCommande = dateCommande;
    }
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }
    public BigDecimal getTotale(){
        return this.totale;
    }
    public void setTotale(BigDecimal totale){
        this.totale = totale;
    }
    public BigDecimal getTotalePayeCheque(){
        return this.totalePayeCheque;
    }
    public void setTotalePayeCheque(BigDecimal totalePayeCheque){
        this.totalePayeCheque = totalePayeCheque;
    }
    public BigDecimal getTotalePayeEspece(){
        return this.totalePayeEspece;
    }
    public void setTotalePayeEspece(BigDecimal totalePayeEspece){
        this.totalePayeEspece = totalePayeEspece;
    }
    @OneToMany(mappedBy = "commande")
    public List<CommandeItem> getCommandeItems(){
        return this.commandeItems;
    }
    public void setCommandeItems(List<CommandeItem> commandeItems){
        this.commandeItems = commandeItems;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Store getStore(){
        return this.store;
    }
    public void setStore(Store store){
        this.store = store;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public EtatCommande getEtatCommande(){
        return this.etatCommande;
    }
    public void setEtatCommande(EtatCommande etatCommande){
        this.etatCommande = etatCommande;
    }

    @Transient
    public String getLabel() {
        label = reference;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Commande commande = (Commande) o;
        return id != null && id.equals(commande.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

