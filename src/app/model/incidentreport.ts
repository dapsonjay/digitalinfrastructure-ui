export interface IncidentReportDTO {
  id: string;
  profileId: number;
  lastname: string;
  firstname: string;
  street: string;
  city: string;
  state: string;
  postalcode: string;
  incidentDescription: string;
  incidentDate: string;
  institution: string;
  contactMe: boolean;
  perEmail: boolean;
  perPhone: boolean;
}
