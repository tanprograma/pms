import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PmsAppComponent } from './components/pms-app/pms-app.component';
import { IssueComponent } from './components/issue/issue.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { RequestComponent } from './components/request/request.component';
import { ShopComponent } from './components/shop/shop.component';
import { DispenseComponent } from './components/dispense/dispense.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DispenseFormComponent } from './forms/dispense-form/dispense-form.component';
import { IssueFormComponent } from './forms/issue-form/issue-form.component';
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { InventoryFormComponent } from './forms/inventory-form/inventory-form.component';
import { CommoditiesFormComponent } from './forms/commodities-form/commodities-form.component';
import { AddStoreFormComponent } from './forms/add-store-form/add-store-form.component';
import { InputGenComponent } from './forms/input-gen/input-gen.component';
import { HeaderComponent } from './components/header/header.component';
import { NavdivComponent } from './navigation/navdiv/navdiv.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsAppComponent,
    IssueComponent,
    ReceiveComponent,
    RequestComponent,
    ShopComponent,
    DispenseComponent,
    InventoryComponent,
    DispenseFormComponent,
    IssueFormComponent,
    RequestFormComponent,
    InventoryFormComponent,
    CommoditiesFormComponent,
    AddStoreFormComponent,
    InputGenComponent,
    HeaderComponent,
    NavdivComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
