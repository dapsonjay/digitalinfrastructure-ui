import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FilePickerComponent } from 'src/app/modal/file-picker/file-picker.component';
import { UploadDocComponent } from '../upload-doc/upload-doc.component';

@Component({
  selector: 'app-document-explorer',
  templateUrl: './document-explorer.component.html',
  styleUrls: ['./document-explorer.component.scss']
})
export class DocumentExplorerComponent implements OnInit {

  topTitle: string = "ZAGD Document Explorer";

  populatedView: boolean = true;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "file-picker";
    dialogConfig.height = "400px";
    dialogConfig.width = "800px";

    const modalDialog = this.matDialog.open(FilePickerComponent, dialogConfig);
  }

}
