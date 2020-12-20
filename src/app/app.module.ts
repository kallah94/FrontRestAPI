import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AgenceComponent } from './agence/agence.component';
import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAgenceDialogComponent } from './agence/edit-agence-dialog/edit-agence-dialog.component';
import { DeleteagencedialogComponent } from './agence/deleteagencedialog/deleteagencedialog.component';
import { DialogeditcompteComponent } from './compte/dialogeditcompte/dialogeditcompte.component';
import { DialogdialogcompteComponent } from './compte/dialogdialogcompte/dialogdialogcompte.component';
import { DialogeditcomponentComponent } from './client/dialogeditcomponent/dialogeditcomponent.component';
import { DialogdeletecomponentComponent } from './client/dialogdeletecomponent/dialogdeletecomponent.component';
import { HomeComponent } from './home/home.component';
import { DialogDetailComponent } from './agence/dialog-detail/dialog-detail.component';
import { DetaildialogClientComponent } from './client/detaildialog-client/detaildialog-client.component';
import { DetaildialogCompteComponent } from './compte/detaildialog-compte/detaildialog-compte.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AgenceComponent,
    CompteComponent,
    EditAgenceDialogComponent,
    DeleteagencedialogComponent,
    DialogeditcompteComponent,
    DialogdialogcompteComponent,
    DialogeditcomponentComponent,
    DialogdeletecomponentComponent,
    HomeComponent,
    DialogDetailComponent,
    DialogDetailComponent,
    DetaildialogClientComponent,
    DetaildialogCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
