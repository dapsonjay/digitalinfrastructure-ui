import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-folder',
  templateUrl: './display-folder.component.html',
  styleUrls: ['./display-folder.component.scss']
})
export class DisplayFolderComponent implements OnInit {

  folders = [
    {
      id: 1,
      folderName: "Folder1",
      files: ["File 1", "File 2"],
      folder: [
        {
          folderName: "Subfolder of folder1",
          folder: []
        }
      ]
    },
    {
      id: 2,
      folderName: "Folder2",
      files: ["File 1", "File 2"],
      folder: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
