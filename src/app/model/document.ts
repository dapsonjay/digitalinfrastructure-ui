export class DisDocument {
  documentId: string = "";
  filename: string = "";
  extension: string = "";
  absPath: string = "";
  isDir: boolean = false;
  contentType: string = "";
  fileData: string = "";
  fileSize: number = 0;
  documentOwnerId: number = 0;
  documentGroupId: number = 0;
  createdOn: string = "";
  modifiedOn: string = "";
  accessedOn: string = "";
  childer? : DisDocument[];
}
