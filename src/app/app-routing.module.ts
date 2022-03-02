import { IncidentReportingComponent } from './incident-reporting/incident-reporting.component';
import { DataviewComponent } from './datamanager/dataview/dataview.component';
import { UploadDocComponent } from './documentmanager/upload-doc/upload-doc.component';
import { DatacaptureComponent } from './datamanager/datacapture/datacapture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUse01Component } from './account/login-use01.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpointComponent } from './startpoint/startpoint.component';
import { DocumentExplorerComponent } from './documentmanager/document-explorer/document-explorer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'startpoint', component: StartpointComponent },
  { path: 'login', component: LoginUse01Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'datacapture', component: DatacaptureComponent },
  { path: 'dataview', component: DataviewComponent },
  { path: 'docuploader', component: UploadDocComponent },
  { path: 'docexplorer', component: DocumentExplorerComponent },
  { path: 'incidentreport', component: IncidentReportingComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
            { enableTracing: true }
            )
          ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
