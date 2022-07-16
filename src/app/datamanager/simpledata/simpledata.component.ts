import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simpledata',
  templateUrl: './simpledata.component.html',
  styleUrls: ['./simpledata.component.scss']
})
export class SimpledataComponent implements OnInit {


  @Output() passDataOver = new EventEmitter<string>();

  email: any;
  phone: any;
  postalcode: any;
  state: any;
  firstname: any;
  lastname: any;

  constructor() { }

  ngOnInit(): void {
  }



}
