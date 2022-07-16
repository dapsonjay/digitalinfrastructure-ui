import { DisDocument } from './../model/document';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EndPointUrls } from '../model/endPointUrls';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentManagerService {

  _documentSubject = new BehaviorSubject<DisDocument[]>([]);
  document = this._documentSubject.asObservable();
  endPoints = new EndPointUrls();
  constructor(private http: HttpClient) { }



  postDocument(formData: FormData) {

    this.http.post(this.endPoints.saveDocumentEndPoint, formData)
                   .subscribe(result => {
                      this._documentSubject.next(Object.assign(result));
                   },
                    error => console.warn('Unable to save document') );

  }


  createDocumentFromFileDemo(): DisDocument {
     let disDocumentObj = JSON.parse("./assert/docs/file-directory-tree.json");
     let disDoc: DisDocument = <DisDocument> disDocumentObj;
     return disDoc;
  }


}
