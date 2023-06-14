import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CommandeService} from 'src/app/controller/service/Commande.service';
import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeCriteria} from 'src/app/controller/criteria/CommandeCriteria.model';

import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {CommandeItemDto} from 'src/app/controller/model/CommandeItem.model';
import {CommandeItemService} from 'src/app/controller/service/CommandeItem.service';
import {EtatCommandeDto} from 'src/app/controller/model/EtatCommande.model';
import {EtatCommandeService} from 'src/app/controller/service/EtatCommande.service';
@Component({
  selector: 'app-commande-view-admin',
  templateUrl: './commande-view-admin.component.html'
})
export class CommandeViewAdminComponent extends AbstractViewController<CommandeDto, CommandeCriteria, CommandeService> implements OnInit {

    commandeItems = new CommandeItemDto();
    commandeItemss: Array<CommandeItemDto> = [];

    constructor(private commandeService: CommandeService, private produitService: ProduitService, private commandeItemService: CommandeItemService, private etatCommandeService: EtatCommandeService){
        super(commandeService);
    }

    ngOnInit(): void {
        this.commandeItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);

        this.etatCommande = new EtatCommandeDto();
        this.etatCommandeService.findAll().subscribe((data) => this.etatCommandes = data);
    }


    get produit(): ProduitDto {
        return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits():Array<ProduitDto> {
        return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }

    get etatCommande(): EtatCommandeDto {
        return this.etatCommandeService.item;
    }
    set etatCommande(value: EtatCommandeDto) {
        this.etatCommandeService.item = value;
    }
    get etatCommandes():Array<EtatCommandeDto> {
        return this.etatCommandeService.items;
    }
    set etatCommandes(value: Array<EtatCommandeDto>) {
        this.etatCommandeService.items = value;
    }

}
