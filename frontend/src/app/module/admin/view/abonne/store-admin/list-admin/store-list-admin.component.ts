import {Component, OnInit} from '@angular/core';
import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-store-list-admin',
  templateUrl: './store-list-admin.component.html'
})
export class StoreListAdminComponent extends AbstractListController<StoreDto, StoreCriteria, StoreService>  implements OnInit {

    fileName = 'Store';

  
    constructor(storeService: StoreService) {
        super(storeService);
        this.pdfName='Store.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStores(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Store', 'list');
        isPermistted ? this.service.findAll().subscribe(stores => this.items = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'reference', header: 'Reference'},
        ];
    }



	public initDuplicate(res: StoreDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Reference': e.reference ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        }];
      }
}
