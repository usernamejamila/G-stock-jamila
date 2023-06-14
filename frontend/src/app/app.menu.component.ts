import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste unite mesure',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/unite-mesure/list']
                    },
                    {
                      label: 'Liste mode paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/mode-paiement/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/marque/list']
                    },
                ]
              },
              {
                label: 'Gestion Abonne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste store',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/store/list']
                    },
                    {
                      label: 'Liste magasin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/magasin/list']
                    },
                    {
                      label: 'Liste abonne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/abonne/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                        label: 'statistique',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/statistique']
                    },

                    {
                      label: 'Liste reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/reception/list']
                    },
                    {
                      label: 'Liste etat reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/etat-reception/list']
                    },
                    {
                      label: 'Liste etat commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/etat-commande/list']
                    },
                    {
                      label: 'Liste paiement commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/paiement-commande/list']
                    },
                    {
                      label: 'Liste commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/commande/list']
                    },
                    {
                      label: 'Liste etat paiement commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/etat-paiement-commande/list']
                    },
                ]
              },
              {
                label: 'Gestion Produit',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste stock produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/stock-produit/list']
                    },
                    {
                      label: 'Liste produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/produit/list']
                    },
                    {
                      label: 'Liste categorie produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/categorie-produit/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
