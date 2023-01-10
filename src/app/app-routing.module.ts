import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiefcomponentComponent } from './components/chiefcomponent/chiefcomponent.component';
import { PrintComponent } from './components/print/print.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ChiefcomponentComponent },
  { path: 'print', component: PrintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
