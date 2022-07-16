import { ReplaySubject, Observable } from 'rxjs';
import { IncidentReportDTO } from './../model/incidentreport';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointUrls } from '../model/endPointUrls';
import { PageableIncidentReport } from '../model/pageincidentreport';

@Injectable({
  providedIn: 'root'
})
export class IncidentreportService {
  private endPoints = new EndPointUrls();
  private _incidentReportSubject = new ReplaySubject(1);
  incidentReport = this._incidentReportSubject.asObservable();

  constructor(private http: HttpClient) { }

  sendIncidentReport(incidentReport: IncidentReportDTO) {

    console.warn("Sending request to "+this.endPoints.addIncidentReportEndPoint);
    this.http.post(this.endPoints.addIncidentReportEndPoint, incidentReport)
             .subscribe(result => {
               this._incidentReportSubject.next(Object.assign(result));
             },
             error => console.warn('Request to add incident report') );
  }

  getIncidentReports(search: string, page: number,
                     size: number, sort: any,
                     direction: string): Observable<PageableIncidentReport> {

     return this.http.get<PageableIncidentReport>(
       this.endPoints.getListIncidentReportEndPoint, {
         params: new HttpParams()
          .set('searchstring', search)
          .set('page', page.toString())
          .set('size', size)
          .set('sort', sort)
          .set('direction', direction),
         responseType: 'json'
       });
  }
}
