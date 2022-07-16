import { Component, OnInit } from '@angular/core';
import { IncidentReportDTO } from '../model/incidentreport';

@Component({
  selector: 'app-incident-reporting',
  templateUrl: './incident-reporting.component.html',
  styleUrls: ['./incident-reporting.component.scss']
})
export class IncidentReportingComponent implements OnInit {

  topTitle: string = "ZAGD Vorfallmelde";
  incidentReport = {} as IncidentReportDTO;

  currentDate: Date = new Date();
  selectedDate: String;
  institution: String = "";

  constructor() {
    this.selectedDate = this.currentDate.toString();
  }

  ngOnInit(): void {  }

  showIncidentEvent(event: any) {
    console.warn(JSON.stringify(event));
  }

  onSubmit() {  }

}
