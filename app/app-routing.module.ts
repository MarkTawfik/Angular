import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';

import { SpecificComponent } from './components/specificProduct/specific.component';
import { DetailsComponent } from './components/details/details.component';
const routes: Routes = [
  
 {path:'home', component:HomeComponent},
 {path: 'product', component:SpecificComponent},
 {path: 'details', component:DetailsComponent}
 
 
 
 //{path: '', redirectTo:'/Product', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,SpecificComponent,DetailsComponent]
