import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChiefcomponentComponent } from './components/chiefcomponent/chiefcomponent.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [AppComponent, ChiefcomponentComponent, HeaderComponent, BodyComponent, StatisticsComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
