package  ma.sir.easystock.dao.criteria.core;


import ma.sir.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;
import java.time.LocalDateTime;
import java.time.LocalDate;

public class CommandeCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private LocalDateTime dateCommande;
    private LocalDateTime dateCommandeFrom;
    private LocalDateTime dateCommandeTo;
    private String total;
    private String totalMin;
    private String totalMax;
    private String totale;
    private String totaleMin;
    private String totaleMax;
    private String totalePayeCheque;
    private String totalePayeChequeMin;
    private String totalePayeChequeMax;
    private String totalePayeEspece;
    private String totalePayeEspeceMin;
    private String totalePayeEspeceMax;

    private StoreCriteria store ;
    private List<StoreCriteria> stores ;
    private EtatCommandeCriteria etatCommande ;
    private List<EtatCommandeCriteria> etatCommandes ;


    public CommandeCriteria(){}

    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getReferenceLike(){
        return this.referenceLike;
    }
    public void setReferenceLike(String referenceLike){
        this.referenceLike = referenceLike;
    }

    public LocalDateTime getDateCommande(){
        return this.dateCommande;
    }
    public void setDateCommande(LocalDateTime dateCommande){
        this.dateCommande = dateCommande;
    }
    public LocalDateTime getDateCommandeFrom(){
        return this.dateCommandeFrom;
    }
    public void setDateCommandeFrom(LocalDateTime dateCommandeFrom){
        this.dateCommandeFrom = dateCommandeFrom;
    }
    public LocalDateTime getDateCommandeTo(){
        return this.dateCommandeTo;
    }
    public void setDateCommandeTo(LocalDateTime dateCommandeTo){
        this.dateCommandeTo = dateCommandeTo;
    }
    public String getTotal(){
        return this.total;
    }
    public void setTotal(String total){
        this.total = total;
    }   
    public String getTotalMin(){
        return this.totalMin;
    }
    public void setTotalMin(String totalMin){
        this.totalMin = totalMin;
    }
    public String getTotalMax(){
        return this.totalMax;
    }
    public void setTotalMax(String totalMax){
        this.totalMax = totalMax;
    }
      
    public String getTotale(){
        return this.totale;
    }
    public void setTotale(String totale){
        this.totale = totale;
    }   
    public String getTotaleMin(){
        return this.totaleMin;
    }
    public void setTotaleMin(String totaleMin){
        this.totaleMin = totaleMin;
    }
    public String getTotaleMax(){
        return this.totaleMax;
    }
    public void setTotaleMax(String totaleMax){
        this.totaleMax = totaleMax;
    }
      
    public String getTotalePayeCheque(){
        return this.totalePayeCheque;
    }
    public void setTotalePayeCheque(String totalePayeCheque){
        this.totalePayeCheque = totalePayeCheque;
    }   
    public String getTotalePayeChequeMin(){
        return this.totalePayeChequeMin;
    }
    public void setTotalePayeChequeMin(String totalePayeChequeMin){
        this.totalePayeChequeMin = totalePayeChequeMin;
    }
    public String getTotalePayeChequeMax(){
        return this.totalePayeChequeMax;
    }
    public void setTotalePayeChequeMax(String totalePayeChequeMax){
        this.totalePayeChequeMax = totalePayeChequeMax;
    }
      
    public String getTotalePayeEspece(){
        return this.totalePayeEspece;
    }
    public void setTotalePayeEspece(String totalePayeEspece){
        this.totalePayeEspece = totalePayeEspece;
    }   
    public String getTotalePayeEspeceMin(){
        return this.totalePayeEspeceMin;
    }
    public void setTotalePayeEspeceMin(String totalePayeEspeceMin){
        this.totalePayeEspeceMin = totalePayeEspeceMin;
    }
    public String getTotalePayeEspeceMax(){
        return this.totalePayeEspeceMax;
    }
    public void setTotalePayeEspeceMax(String totalePayeEspeceMax){
        this.totalePayeEspeceMax = totalePayeEspeceMax;
    }
      

    public StoreCriteria getStore(){
        return this.store;
    }

    public void setStore(StoreCriteria store){
        this.store = store;
    }
    public List<StoreCriteria> getStores(){
        return this.stores;
    }

    public void setStores(List<StoreCriteria> stores){
        this.stores = stores;
    }
    public EtatCommandeCriteria getEtatCommande(){
        return this.etatCommande;
    }

    public void setEtatCommande(EtatCommandeCriteria etatCommande){
        this.etatCommande = etatCommande;
    }
    public List<EtatCommandeCriteria> getEtatCommandes(){
        return this.etatCommandes;
    }

    public void setEtatCommandes(List<EtatCommandeCriteria> etatCommandes){
        this.etatCommandes = etatCommandes;
    }
}
