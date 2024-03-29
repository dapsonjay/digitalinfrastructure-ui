import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUse01Component } from './account/login-use01.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartpointComponent } from './startpoint/startpoint.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatacaptureComponent } from './datamanager/datacapture/datacapture.component';
import { DataviewComponent } from './datamanager/dataview/dataview.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { UploadDocComponent } from './documentmanager/upload-doc/upload-doc.component'
import { HttpClientModule } from '@angular/common/http';
import { DocumentExplorerComponent } from './documentmanager/document-explorer/document-explorer.component';
import { DisplayFolderComponent } from './documentmanager/display-folder/display-folder.component';
import { FilePickerComponent } from './modal/file-picker/file-picker.component';
import { SignupComponent } from './account/signup.component';
import { TelephoneInputComponent } from './common-components/telephone-input/telephone-input.component';
import { IncidentReportingComponent } from './incident-reporting/incident-reporting.component';
import { SimpledataComponent } from './datamanager/simpledata/simpledata.component';
import { NomenuTopComponent } from './common-components/nomenu-top/nomenu-top.component';
import { ZagTimepickerComponent } from './common-components/zag-timepicker/zag-timepicker.component';
import { SimpleaddressComponent } from './datamanager/simpleaddress/simpleaddress.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginUse01Component,
    HomeComponent,
    DashboardComponent,
    StartpointComponent,
    SignUpComponent,
    DatacaptureComponent,
    DataviewComponent,
    UploadDocComponent,
    DocumentExplorerComponent,
    DisplayFolderComponent,
    FilePickerComponent,
    SignupComponent,
    TelephoneInputComponent,
    IncidentReportingComponent,
    SimpledataComponent,
    NomenuTopComponent,
    ZagTimepickerComponent,
    SimpleaddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
