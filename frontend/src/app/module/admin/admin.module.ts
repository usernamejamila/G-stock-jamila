import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReferentielAdminModule } from './view/referentiel/referentiel-admin.module';
import { ReferentielAdminRoutingModule } from './view/referentiel/referentiel-admin-routing.module';
import { AbonneAdminModule } from './view/abonne/abonne-admin.module';
import { AbonneAdminRoutingModule } from './view/abonne/abonne-admin-routing.module';
import { CommandeAdminModule } from './view/commande/commande-admin.module';
import { CommandeAdminRoutingModule } from './view/commande/commande-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import { StatistiqueComponent } from './view/statistique/statistique.component';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
   StatistiqueComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  ReferentielAdminModule,
  ReferentielAdminRoutingModule,
  AbonneAdminModule,
  AbonneAdminRoutingModule,
  CommandeAdminModule,
  CommandeAdminRoutingModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    ReferentielAdminModule,
    AbonneAdminModule,
    CommandeAdminModule,
      StatistiqueComponent,
  ],
  entryComponents: [],
})
export class AdminModule { }
