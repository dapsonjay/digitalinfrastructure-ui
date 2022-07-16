import { UrlWithStringQuery } from 'url';
import { IncidentReportDTO } from './incidentreport';
import { PageMetaData } from './pageprofiledto';

export class PageableIncidentReport {
  constructor(public incidentReport: IncidentReportDTO[],
              public page: PageMetaData,
              public internalId: String,
              public message: UrlWithStringQuery) {}

}
