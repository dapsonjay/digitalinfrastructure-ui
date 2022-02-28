import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/** Data structure for holding telephone number. */
export class TelComponent {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}


@Component({
  selector: 'app-telephone-input',
  templateUrl: './telephone-input.component.html',
  styleUrls: ['./telephone-input.component.scss']
})
export class TelephoneInputComponent implements OnInit {

  parts: FormGroup;

  constructor() {
    this.parts = new FormGroup({})
   }

  ngOnInit(): void {
  }

}
