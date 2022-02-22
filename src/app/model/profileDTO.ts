export class ProfileDTO {
  profileId: number = 0;
  lastname: string = "";
  firstname: string = "";
  organisationName: string = "";
  personInitial: string = "";
  personTitle: string = "";
  street: string = "";
  city: string = "";
  state: string = "";
  postalcode: string = "";
  nationality: string = "";
  description: string = "";
  email: string = "";
  mobilePhone: string = "";
  homePhone: string = "";
  profilePhotoUrl: string = "";
  birthday: string = "";
  gender: string = "";
  occupation: string = "";
  supervisorId: number = 0;
  maritalStatus: string = "";
  profileDataType: string = "";
  internalEmployee: boolean = false;
  organisationMember: boolean = true;
  individualMember: boolean = false;
  memberOrganisationName: string = "";
  dateJoined: string = "";
  position: string = "";
  username: string = "";
  password: string = "";
  preferredLanguageCode: String = "de_DE";
  addressId = 0;
  emailId = 0;
  constructor() { }
}
