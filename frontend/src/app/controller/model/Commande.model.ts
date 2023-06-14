import {EtatCommandeDto} from './EtatCommande.model';
import {StoreDto} from './Store.model';
import {CommandeItemDto} from './CommandeItem.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {ReceptionDto} from "./Reception.model";
import {ReceptionItemDto} from "./ReceptionItem.model";


export class CommandeDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateCommande: Date;
    public total: number;
    public totale: number;
    public totalePayeCheque: number;
    public totalePayeEspece: number;
    public dateCommandeMax: string ;
    public dateCommandeMin: string ;
    public totalMax: string ;
    public totalMin: string ;
    public totaleMax: string ;
    public totaleMin: string ;
    public totalePayeChequeMax: string ;
    public totalePayeChequeMin: string ;
    public totalePayeEspeceMax: string ;
    public totalePayeEspeceMin: string ;
    public store: StoreDto ;
    public etatCommande: EtatCommandeDto ;
     public commandeItems: Array<CommandeItemDto>;
 public receptionItems: Array<ReceptionItemDto>;
 public receptions: Array<ReceptionDto>;



}
