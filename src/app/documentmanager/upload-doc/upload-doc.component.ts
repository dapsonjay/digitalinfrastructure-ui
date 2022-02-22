import { DocumentManagerService } from './../../services/document-manager.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss']
})
export class UploadDocComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private docService: DocumentManagerService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){

    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);
    console.warn("Submit button click ${formData}")
    this.docService.postDocument(formData);
  }

}
