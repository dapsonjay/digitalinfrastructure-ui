export class EndPointUrls {
  baseUrl: string = "http://192.168.0.91:8080/dc/api/v1";
  registerUser: string = `${this.baseUrl}/register/member/`;
  addProfileEndPoint: string = `${this.baseUrl}/profile/add/`;
  getByProfileIdEndpoint: string = `${this.baseUrl}/profile/id/`;
  getProfilesEndPoint: string = `${this.baseUrl}/profile/`;
  deleteProfileEndPoint: string = `${this.baseUrl}/delete/profile`;
  deleteMultiProfileEndPoint: string = `${this.baseUrl}/delete/multiprofile`;
  saveDocumentEndPoint: string = `${this.baseUrl}/add/document`;
  getDocumentByIDEndPoint: string = `${this.baseUrl}/get/documents`;
  getDocumentFromFolderEndPoint: string = `${this.baseUrl}/get/folder`;
  deleteDocumentEndPoint: string = `${this.baseUrl}/delete/document`;
  deleteMultiDocumentEndPoint: string = `${this.baseUrl}/delete/multidocument`;
  deleteFolderEndPoint: string = `${this.baseUrl}/delete/foloder`;
  deleteMultiFolderEndPoint: string = `${this.baseUrl}/delete/multifolder`;
}
