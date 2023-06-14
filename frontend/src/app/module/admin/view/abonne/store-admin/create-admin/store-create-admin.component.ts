import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';
@Component({
  selector: 'app-store-create-admin',
  templateUrl: './store-create-admin.component.html'
})
export class StoreCreateAdminComponent extends AbstractCreateController<StoreDto, StoreCriteria, StoreService>  implements OnInit {



   private _validStoreLibelle = true;
   private _validStoreReference = true;

    constructor( private storeService: StoreService ) {
        super(storeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validStoreLibelle = value;
        this.validStoreReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStoreLibelle();
        this.validateStoreReference();
    }

    public validateStoreLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStoreLibelle = false;
        } else {
            this.validStoreLibelle = true;
        }
    }
    public validateStoreReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validStoreReference = false;
        } else {
            this.validStoreReference = true;
        }
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
