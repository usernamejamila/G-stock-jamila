import {CategorieProduitDto} from './CategorieProduit.model';
import {StoreDto} from './Store.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProduitDto  extends BaseDto{

    public id: number;
    public reference: string;
    public libelle: string;
    public barcode: string;
    public image: string;
    public description: string;
    public prixAchatMoyen: number;
    public quantite: number;
    public seuilAlert: number;
    public photoProduits: string;
    public prixAchatMoyenMax: string ;
    public prixAchatMoyenMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public seuilAlertMax: string ;
    public seuilAlertMin: string ;
    public categorieProduit: CategorieProduitDto ;
    public store: StoreDto ;

}
