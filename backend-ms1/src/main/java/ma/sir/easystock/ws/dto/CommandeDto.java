package  ma.sir.easystock.ws.dto;

import ma.sir.easystock.zynerator.audit.Log;
import ma.sir.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.math.BigDecimal;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommandeDto  extends AuditBaseDto {

    private String reference  ;
    private String dateCommande ;
    private BigDecimal total  ;
    private BigDecimal totale  ;
    private BigDecimal totalePayeCheque  ;
    private BigDecimal totalePayeEspece  ;

    private StoreDto store ;
    private EtatCommandeDto etatCommande ;

    private List<CommandeItemDto> commandeItems ;


    public CommandeDto(){
        super();
    }



    @Log
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateCommande(){
        return this.dateCommande;
    }
    public void setDateCommande(String dateCommande){
        this.dateCommande = dateCommande;
    }

    @Log
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }

    @Log
    public BigDecimal getTotale(){
        return this.totale;
    }
    public void setTotale(BigDecimal totale){
        this.totale = totale;
    }

    @Log
    public BigDecimal getTotalePayeCheque(){
        return this.totalePayeCheque;
    }
    public void setTotalePayeCheque(BigDecimal totalePayeCheque){
        this.totalePayeCheque = totalePayeCheque;
    }

    @Log
    public BigDecimal getTotalePayeEspece(){
        return this.totalePayeEspece;
    }
    public void setTotalePayeEspece(BigDecimal totalePayeEspece){
        this.totalePayeEspece = totalePayeEspece;
    }


    public StoreDto getStore(){
        return this.store;
    }

    public void setStore(StoreDto store){
        this.store = store;
    }
    public EtatCommandeDto getEtatCommande(){
        return this.etatCommande;
    }

    public void setEtatCommande(EtatCommandeDto etatCommande){
        this.etatCommande = etatCommande;
    }



    public List<CommandeItemDto> getCommandeItems(){
        return this.commandeItems;
    }

    public void setCommandeItems(List<CommandeItemDto> commandeItems){
        this.commandeItems = commandeItems;
    }

}
