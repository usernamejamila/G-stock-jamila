import {EtatCommandeCriteria} from './EtatCommandeCriteria.model';
import {StoreCriteria} from './StoreCriteria.model';
import {CommandeItemCriteria} from './CommandeItemCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CommandeCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateCommande: Date;
    public dateCommandeFrom: Date;
    public dateCommandeTo: Date;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public totale: number;
     public totaleMin: number;
     public totaleMax: number;
     public totalePayeCheque: number;
     public totalePayeChequeMin: number;
     public totalePayeChequeMax: number;
     public totalePayeEspece: number;
     public totalePayeEspeceMin: number;
     public totalePayeEspeceMax: number;
  public store: StoreCriteria ;
  public stores: Array<StoreCriteria> ;
  public etatCommande: EtatCommandeCriteria ;
  public etatCommandes: Array<EtatCommandeCriteria> ;
      public commandeItems: Array<CommandeItemCriteria>;



}
