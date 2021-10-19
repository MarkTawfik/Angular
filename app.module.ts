import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule }from '@angular/material/radio';
import { MatTableModule }from '@angular/material/table';
import{ MatGridListModule } from '@angular/material/grid-list'
import { AgGridModule } from 'ag-grid-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { MatMenu } from '@angular/material/menu'




import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    
    routingComponents,
         DetailsComponent,
         
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatChipsModule,
    MatGridListModule,
    AgGridModule,
    ReactiveFormsModule,
    FormsModule,
    
    CustomFormsModule,
    RouterModule,
    
    HttpClientModule,
   // MatMenu
  //  MatMenuContent,
  //  MatMenuItem,
  //  MatMenuModule,
  //  MatMenuTrigger
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
