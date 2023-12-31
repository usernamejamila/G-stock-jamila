import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CommandeDto} from '../model/Commande.model';
import {CommandeCriteria} from '../criteria/CommandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtatCommandeDto} from '../model/EtatCommande.model';
import {StoreDto} from '../model/Store.model';
import {CommandeItemDto} from '../model/CommandeItem.model';
import {ReceptionDto} from "../model/Reception.model";

@Injectable({
  providedIn: 'root'
})
export class CommandeService extends AbstractService<CommandeDto, CommandeCriteria> {
    private _receptionDialog: boolean;
    private _reception: ReceptionDto;

    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/commande/');
    }


    public constrcutDto(): CommandeDto {
        return new CommandeDto();
    }

    public constrcutCriteria(): CommandeCriteria {
        return new CommandeCriteria();
    }


    get receptionDialog(): boolean {
        return this._receptionDialog;
    }
    set receptionDialog(value: boolean) {
        this._receptionDialog = value;
    }

    get reception(): ReceptionDto {
        if (this._reception == null) {
            this._reception = new ReceptionDto();
        }
        return this._reception;
    }

    set reception(value: ReceptionDto) {
        this._reception = value;
    }


}
