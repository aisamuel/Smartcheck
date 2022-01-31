import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { SmartcheckRoutingModule } from './smartcheck-routing.module';

import { ServersComponent } from './servers/servers.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ServersFormDialogComponent } from './servers/dialogs/servers-form-dialog/servers-form-dialog.component';
import { ServersDeleteComponent } from './servers/dialogs/servers-delete/servers-delete.component';
import { HomeComponent } from './home/home.component';
import { HomeFormDialogComponent } from './home/dialogs/home-form-dialog/home-form-dialog.component';
import { HomeDeleteComponent } from './home/dialogs/home-delete/home-delete.component';
import { CheckComponent } from './check/check.component';
import { ApplicationsFormDialogComponent } from './applications/dialogs/applications-form-dialog/applications-form-dialog.component';
import { ApplicationsDeleteComponent } from './applications/dialogs/applications-delete/applications-delete.component';


@NgModule({
  declarations: [
    ServersComponent,
    ApplicationsComponent,
    ServersFormDialogComponent,
    ServersDeleteComponent,
    HomeComponent,
    HomeFormDialogComponent,
    HomeDeleteComponent,
    CheckComponent,
    ApplicationsFormDialogComponent,
    ApplicationsDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatMenuModule,
    MaterialFileInputModule,
    SmartcheckRoutingModule
  ]
})
export class SmartcheckModule { }
