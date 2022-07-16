import { ProfileDTO } from './../model/profileDTO';
import { EndPointUrls } from './../model/endPointUrls';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators"
import { PageableProfileDataDto } from '../model/pageprofiledto';

@Injectable({
  providedIn: 'root'
})
export class ProfileDTOService {

  private endPoints = new EndPointUrls();
  private _profileDTOSubject = new ReplaySubject(1);
  profileDTO = this._profileDTOSubject.asObservable();


  constructor(private http: HttpClient) { }

  sendByPost(profile: ProfileDTO) {

    console.warn("Sending request to "+ this.endPoints.registerUser);
    this.http.post(this.endPoints.registerUser, profile)
                   .subscribe(result => {
                      this._profileDTOSubject.next(Object.assign(result));
                   },
                    error => console.warn('Request to add Profile data failed') );

  }

  getUniqueProfile(profileId: number) {}


  getProfilesData(search: string, page: number,
                  size: number, sort: any,
                  direction: string): Observable<PageableProfileDataDto> {

     return this.http.get<PageableProfileDataDto>(this.endPoints.getProfilesEndPoint, {
       params: new HttpParams()
       .set('searchstring', search)
       .set('page', page.toString())
       .set('size', size)
       .set('sort', sort)
       .set('direction', direction),
       responseType: 'json'
     });

  }

  getProfilesDataPage(search: string, page: number,
                  size: number, sort: any, direction: string): Observable<PageableProfileDataDto> {

                    return this.http.get<PageableProfileDataDto>(this.endPoints.getProfilesEndPoint, {
                                        params: new HttpParams()
                                        .set('searchString', search)
                                        .set('page', page.toString())
                                        .set('size', size)
                                        .set('sort', sort)
                                        .set('direction', direction),
                                        responseType: 'json'
                                       });
  }

  getDummyProfile() : ProfileDTO {
    const profile: ProfileDTO  =  {
                    profileId : 0,
                    lastname : "test001Last",
                    firstname : "test001First",
                    organisationName : "Zentralrat Africanische Gemeinde",
                    personInitial : "O",
                    personTitle : "Mr",
                    street : "Berliner Strasse 141",
                    city : "Berlin",
                    state : "Berlin",
                    postalcode : "12027",
                    nationality : "Germany",
                    description : "Alles klar",
                    email : "tt001@melody.org",
                    mobilePhone : "+4915225257895",
                    homePhone : "+493098765432",
                    profilePhotoUrl : "myprofile.png",
                    birthday : "1997-09-21",
                    gender : "M",
                    occupation : "Software Engineer",
                    supervisorId : 0,
                    maritalStatus : "S",
                    profileDataType : "",
                    internalEmployee : true,
                    organisationMember : true,
                    individualMember : false,
                    memberOrganisationName : "Afro Ticker Organisation",
                    dateJoined : "2022-01-16",
                    position : "",
                    username: "",
                    password: "",
                    preferredLanguageCode: "de_DE",
                    addressId: 0,
                    emailId: 0
                  };

     return profile;
  }

  getProfileDTO(search: string) : Observable<ProfileDTO> {
    const profileDTO = of(this.getDummyProfile());
    return profileDTO;
  }

}
