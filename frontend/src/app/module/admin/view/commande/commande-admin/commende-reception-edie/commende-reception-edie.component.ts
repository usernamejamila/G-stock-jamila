import {Component, OnInit} from '@angular/core';
import {ReceptionItemDto} from "../../../../../../controller/model/ReceptionItem.model";
import {ReceptionDto} from "../../../../../../controller/model/Reception.model";
import {CommandeService} from "../../../../../../controller/service/Commande.service";
import {AbstractCreateController} from "../../../../../../zynerator/controller/AbstractCreateController";
import {CommandeDto} from "../../../../../../controller/model/Commande.model";
import {CommandeCriteria} from "../../../../../../controller/criteria/CommandeCriteria.model";
import {MagasinDto} from "../../../../../../controller/model/Magasin.model";
import {MagasinService} from "../../../../../../controller/service/Magasin.service";
import {ProduitService} from "../../../../../../controller/service/Produit.service";
import {ProduitDto} from "../../../../../../controller/model/Produit.model";
import {ReceptionService} from "../../../../../../controller/service/Reception.service";

@Component({
  selector: 'app-commende-reception-edie',
  templateUrl: './commende-reception-edie.component.html',
})
export class CommendeReceptionEdieComponent extends AbstractCreateController<CommandeDto, CommandeCriteria, CommandeService> implements OnInit {

  private _receptionItemsElement = new ReceptionItemDto();
  constructor( service: CommandeService , private magasinService: MagasinService,  private produitService: ProduitService , private receptionService : ReceptionService){
    super(service);

  }


  ngOnInit(): void {
  }
  get receptionDialog(): boolean {
    return this.service.receptionDialog;
  }

  set receptionDialog(value: boolean) {
    this.service.receptionDialog = value;
  }
  get receptionItemsElement(): ReceptionItemDto {
    return this._receptionItemsElement;
  }

  set receptionItemsElement(value: ReceptionItemDto) {
    this._receptionItemsElement = value;
  }

  get reception(): ReceptionDto {
    return this.service.reception;
  }
  get magasin(): MagasinDto {
    return this.magasinService.item;
  }

  set magasin(value: MagasinDto) {
    this.magasinService.item = value;
  }

  get magasins(): Array<MagasinDto> {
    return this.magasinService.items;
  }

  set magasins(value: Array<MagasinDto>) {
    this.magasinService.items = value;
  }
  get produit(): ProduitDto {
    return this.produitService.item;
  }

  set produit(value: ProduitDto) {
    this.produitService.item = value;
  }

  get produits(): Array<ProduitDto> {
    return this.produitService.items;
  }

  get produitOfReceptionItems(): Array<ProduitDto>{
    let productOfReception = new Array();
    if (this.reception.receptionItems == null)
      this.reception.receptionItems = new Array<ReceptionItemDto>();
    for(let receptionItem of this.reception.receptionItems)  {
      productOfReception.push(receptionItem.produit);
    }
    return productOfReception;
  }

  set produits(value: Array<ProduitDto>) {
    this.produitService.items = value;
  }
  public addReceptionItems() {
    if (this.item.receptionItems == null)
      this.item.receptionItems = new Array<ReceptionItemDto>();
    this.validateReceptionItems();
    if (this.errorMessages.length === 0) {
      this.item.receptionItems.push({...this.receptionItemsElement});
      this.receptionItemsElement = new ReceptionItemDto();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreurs',
        detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
      });
    }
  }

  validateReceptionItems() {
    this.errorMessages = new Array();
  }


  validateReceptions(){
    this.errorMessages = new Array();
  }
  get receptionsElement(): ReceptionDto {
    if( this._receptionsElement == null )
      this._receptionsElement = new ReceptionDto();
    return this._receptionsElement;
  }
  private _receptionsElement = new ReceptionDto();


  set receptionsElement(value: ReceptionDto) {
    this._receptionsElement = value;
  }

  public addReceptions() {
    if( this.item.receptions == null )
      this.item.receptions = new Array<ReceptionDto>();
    this.validateReceptions();
    if (this.errorMessages.length === 0) {
      this.item.receptions.push({... this.receptionsElement});
      this.receptionsElement = new ReceptionDto();
    }else{
      this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
    }
  }



  public deleteReceptionItem(p: ReceptionItemDto) {
    this.item.receptionItems.forEach((element, index) => {
      if (element === p) {
        this.item.receptionItems.splice(index, 1);
      }
    });
  }
  public editReceptionItem(p: ReceptionItemDto) {
    this.receptionItemsElement = {...p};
    this.activeTab = 0;
  }

  receptionDto: ReceptionDto = new ReceptionDto();

  create() {
    this.receptionService.create(this.reception)
        .subscribe(
            response => {
              // Gérer la réponse réussie du serveur
              console.log('Réception créée avec succès:', response);
              // Réinitialiser les données du formulaire ou effectuer d'autres actions nécessaires
              this.receptionDto = new ReceptionDto();
            },
            error => {
              // Gérer l'erreur de la requête
              console.error('Erreur lors de la création de la réception:', error);
            }
        );
  }

}
