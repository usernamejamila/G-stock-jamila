import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';

@Component({
  selector: 'app-store-view-admin',
  templateUrl: './store-view-admin.component.html'
})
export class StoreViewAdminComponent extends AbstractViewController<StoreDto, StoreCriteria, StoreService> implements OnInit {


    constructor(private storeService: StoreService){
        super(storeService);
    }

    ngOnInit(): void {
    }




}
