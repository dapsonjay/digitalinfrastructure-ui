import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpoint',
  templateUrl: './startpoint.component.html',
  styleUrls: ['./startpoint.component.scss']
})
export class StartpointComponent implements OnInit {

  loggedInUser: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
