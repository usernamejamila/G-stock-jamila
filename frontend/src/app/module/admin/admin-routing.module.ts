
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import {StatistiqueComponent} from "./view/statistique/statistique.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'referentiel',
                            loadChildren: () => import('./view/referentiel/referentiel-admin-routing.module').then(x=>x.ReferentielAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'abonne',
                            loadChildren: () => import('./view/abonne/abonne-admin-routing.module').then(x=>x.AbonneAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'statistique',
                            component:StatistiqueComponent,
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'commande',
                            loadChildren: () => import('./view/commande/commande-admin-routing.module').then(x=>x.CommandeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
