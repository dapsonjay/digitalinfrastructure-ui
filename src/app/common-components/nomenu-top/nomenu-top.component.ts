import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nomenu-top',
  templateUrl: './nomenu-top.component.html',
  styleUrls: ['./nomenu-top.component.scss']
})
export class NomenuTopComponent implements OnInit {

  @Input() title: string = "ZAGD";

  constructor() { }

  ngOnInit(): void {
  }

}
