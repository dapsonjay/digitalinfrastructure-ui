import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DocumentManagerService } from 'src/app/services/document-manager.service';
import { UploadDocComponent } from '../../documentmanager/upload-doc/upload-doc.component';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})

export class FilePickerComponent implements OnInit {

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

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "file-picker";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    // const modalDialog = this.matDialog.open(UploadDocComponent, dialogConfig);
  }

}
