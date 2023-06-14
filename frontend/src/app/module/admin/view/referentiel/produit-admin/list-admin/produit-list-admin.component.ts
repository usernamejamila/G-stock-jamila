import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/ProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { CategorieProduitService } from 'src/app/controller/service/CategorieProduit.service';
import { StoreService } from 'src/app/controller/service/Store.service';

import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {StoreDto} from 'src/app/controller/model/Store.model';


@Component({
  selector: 'app-produit-list-admin',
  templateUrl: './produit-list-admin.component.html'
})
export class ProduitListAdminComponent extends AbstractListController<ProduitDto, ProduitCriteria, ProduitService>  implements OnInit {

    fileName = 'Produit';

    categorieProduits :Array<CategorieProduitDto>;
    stores :Array<StoreDto>;
  
    constructor(produitService: ProduitService, private categorieProduitService: CategorieProduitService, private storeService: StoreService) {
        super(produitService);
        this.pdfName='Produit.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieProduit();
      this.loadStore();
    }

    public async loadProduits(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.service.findAll().subscribe(produits => this.items = produits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'categorieProduit?.libelle', header: 'Categorie produit'},
            {field: 'barcode', header: 'Barcode'},
            {field: 'image', header: 'Image'},
            {field: 'description', header: 'Description'},
            {field: 'prixAchatMoyen', header: 'Prix achat moyen'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'seuilAlert', header: 'Seuil alert'},
            {field: 'store?.libelle', header: 'Store'},
            {field: 'photoProduits', header: 'Photo produits'},
        ];
    }


    public async loadCategorieProduit(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.categorieProduitService.findAllOptimized().subscribe(categorieProduits => this.categorieProduits = categorieProduits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStore(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.storeService.findAllOptimized().subscribe(stores => this.stores = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProduitDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
                'Categorie produit': e.categorieProduit?.libelle ,
                 'Barcode': e.barcode ,
                 'Image': e.image ,
                 'Description': e.description ,
                 'Prix achat moyen': e.prixAchatMoyen ,
                 'Quantite': e.quantite ,
                 'Seuil alert': e.seuilAlert ,
                'Store': e.store?.libelle ,
                 'Photo produits': e.photoProduits ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Categorie produit': this.criteria.categorieProduit?.libelle ? this.criteria.categorieProduit?.libelle : environment.emptyForExport ,
            'Barcode': this.criteria.barcode ? this.criteria.barcode : environment.emptyForExport ,
            'Image': this.criteria.image ? this.criteria.image : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Prix achat moyen Min': this.criteria.prixAchatMoyenMin ? this.criteria.prixAchatMoyenMin : environment.emptyForExport ,
            'Prix achat moyen Max': this.criteria.prixAchatMoyenMax ? this.criteria.prixAchatMoyenMax : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Seuil alert Min': this.criteria.seuilAlertMin ? this.criteria.seuilAlertMin : environment.emptyForExport ,
            'Seuil alert Max': this.criteria.seuilAlertMax ? this.criteria.seuilAlertMax : environment.emptyForExport ,
        //'Store': this.criteria.store?.libelle ? this.criteria.store?.libelle : environment.emptyForExport ,
            'Photo produits': this.criteria.photoProduits ? this.criteria.photoProduits : environment.emptyForExport ,
        }];
      }
}
