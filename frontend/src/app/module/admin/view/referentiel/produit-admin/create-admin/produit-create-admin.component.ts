import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/ProduitCriteria.model';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {CategorieProduitService} from 'src/app/controller/service/CategorieProduit.service';
@Component({
  selector: 'app-produit-create-admin',
  templateUrl: './produit-create-admin.component.html'
})
export class ProduitCreateAdminComponent extends AbstractCreateController<ProduitDto, ProduitCriteria, ProduitService>  implements OnInit {



   private _validProduitReference = true;
   private _validProduitLibelle = true;
    private _validCategorieProduitReference = true;
    private _validCategorieProduitLibelle = true;
    private _validStoreLibelle = true;
    private _validStoreReference = true;

    constructor( private produitService: ProduitService , private storeService: StoreService, private categorieProduitService: CategorieProduitService) {
        super(produitService);
    }

    ngOnInit(): void {
    this.categorieProduit = new CategorieProduitDto();
    this.categorieProduitService.findAll().subscribe((data) => this.categorieProduits = data);
    this.store = new StoreDto();
    this.storeService.findAll().subscribe((data) => this.stores = data);
}





    public setValidation(value: boolean){
        this.validProduitReference = value;
        this.validProduitLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProduitReference();
        this.validateProduitLibelle();
    }

    public validateProduitReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validProduitReference = false;
        } else {
            this.validProduitReference = true;
        }
    }
    public validateProduitLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validProduitLibelle = false;
        } else {
            this.validProduitLibelle = true;
        }
    }


    public async openCreateCategorieProduit(categorieProduit: string) {
    const isPermistted = await this.roleService.isPermitted('CategorieProduit', 'add');
    if(isPermistted) {
         this.categorieProduit = new CategorieProduitDto();
         this.createCategorieProduitDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get categorieProduit(): CategorieProduitDto {
        return this.categorieProduitService.item;
    }
    set categorieProduit(value: CategorieProduitDto) {
        this.categorieProduitService.item = value;
    }
    get categorieProduits(): Array<CategorieProduitDto> {
        return this.categorieProduitService.items;
    }
    set categorieProduits(value: Array<CategorieProduitDto>) {
        this.categorieProduitService.items = value;
    }
    get createCategorieProduitDialog(): boolean {
       return this.categorieProduitService.createDialog;
    }
    set createCategorieProduitDialog(value: boolean) {
        this.categorieProduitService.createDialog= value;
    }
    get store(): StoreDto {
        return this.storeService.item;
    }
    set store(value: StoreDto) {
        this.storeService.item = value;
    }
    get stores(): Array<StoreDto> {
        return this.storeService.items;
    }
    set stores(value: Array<StoreDto>) {
        this.storeService.items = value;
    }
    get createStoreDialog(): boolean {
       return this.storeService.createDialog;
    }
    set createStoreDialog(value: boolean) {
        this.storeService.createDialog= value;
    }



    get validProduitReference(): boolean {
        return this._validProduitReference;
    }

    set validProduitReference(value: boolean) {
         this._validProduitReference = value;
    }
    get validProduitLibelle(): boolean {
        return this._validProduitLibelle;
    }

    set validProduitLibelle(value: boolean) {
         this._validProduitLibelle = value;
    }

    get validCategorieProduitReference(): boolean {
        return this._validCategorieProduitReference;
    }
    set validCategorieProduitReference(value: boolean) {
        this._validCategorieProduitReference = value;
    }
    get validCategorieProduitLibelle(): boolean {
        return this._validCategorieProduitLibelle;
    }
    set validCategorieProduitLibelle(value: boolean) {
        this._validCategorieProduitLibelle = value;
    }
    get validStoreLibelle(): boolean {
        return this._validStoreLibelle;
    }
    set validStoreLibelle(value: boolean) {
        this._validStoreLibelle = value;
    }
    get validStoreReference(): boolean {
        return this._validStoreReference;
    }
    set validStoreReference(value: boolean) {
        this._validStoreReference = value;
    }


}
