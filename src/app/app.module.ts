import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IssueComponent } from './components/issue/issue.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { RequestComponent } from './components/request/request.component';

import { InventoryComponent } from './components/inventory/inventory.component';
import { DispenseFormComponent } from './forms/dispense-form/dispense-form.component';
import { IssueFormComponent } from './forms/issue-form/issue-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { InventoryFormComponent } from './forms/inventory-form/inventory-form.component';
import { CommoditiesFormComponent } from './forms/commodities-form/commodities-form.component';

import { HeaderComponent } from './components/header/header.component';
import { NavdivComponent } from './navigation/navdiv/navdiv.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { ChiefComponentComponent } from './components/chief-component/chief-component.component';

import { BasicFormComponent } from './forms/basic-form/basic-form.component';
import { InsidenavComponent } from './components/insidenav/insidenav.component';
import { ManageComponent } from './components/manage/manage.component';

import { ClosedivComponent } from './components/closediv/closediv.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { InputmodComponent } from './components/inputmod/inputmod.component';

@NgModule({
  declarations: [
    AppComponent,

    IssueComponent,
    ReceiveComponent,
    RequestComponent,

    InventoryComponent,
    DispenseFormComponent,
    IssueFormComponent,
    RequestFormComponent,
    InventoryFormComponent,
    CommoditiesFormComponent,

    HeaderComponent,
    NavdivComponent,
    WarehouseComponent,
    WarehousesComponent,
    ChiefComponentComponent,

    BasicFormComponent,
    InsidenavComponent,
    ManageComponent,

    ClosedivComponent,
    ClinicComponent,
    InputmodComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
