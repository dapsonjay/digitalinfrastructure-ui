import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-reporting',
  templateUrl: './incident-reporting.component.html',
  styleUrls: ['./incident-reporting.component.scss']
})
export class IncidentReportingComponent implements OnInit {

  topTitle: string = "ZAGD Vollfallmeldung";

  constructor() { }

  ngOnInit(): void {
  }

}
