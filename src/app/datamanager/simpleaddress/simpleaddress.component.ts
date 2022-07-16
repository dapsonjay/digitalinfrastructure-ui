import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-simpleaddress',
  templateUrl: './simpleaddress.component.html',
  styleUrls: ['./simpleaddress.component.scss']
})
export class SimpleaddressComponent implements OnInit {

  address = {} as Address;

  constructor() { }

  ngOnInit(): void {
  }

}
