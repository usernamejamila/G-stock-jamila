import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReceptionDto} from '../model/Reception.model';
import {ReceptionCriteria} from '../criteria/ReceptionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CommandeDto} from '../model/Commande.model';
import {ReceptionItemDto} from '../model/ReceptionItem.model';
import {EtatReceptionDto} from '../model/EtatReception.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService extends AbstractService<ReceptionDto, ReceptionCriteria> {
    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reception/');
    }

    public constrcutDto(): ReceptionDto {
        return new ReceptionDto();
    }

    public constrcutCriteria(): ReceptionCriteria {
        return new ReceptionCriteria();
    }

    private apiUrl = 'http://localhost:8036/api/admin/reception/prepare'; // Remplacez par l'URL réelle de votre API


    prepare(commande: CommandeDto): Observable<ReceptionDto> {
        const url = this.API + "prepare"; // Remplacez "prepare" par le chemin d'accès réel de votre endpoint backend
        return this.http.post<ReceptionDto>(url, commande);
    }

    private jamila = 'http://localhost:8036/api/admin/reception/'; // Remplacez par l'URL de votre API



    create(reception: ReceptionDto): Observable<ReceptionDto> {
        return this.http.post<ReceptionDto>(`${this.jamila}`, reception);
    }
}
