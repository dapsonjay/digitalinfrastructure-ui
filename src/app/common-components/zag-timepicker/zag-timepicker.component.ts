import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zag-timepicker',
  templateUrl: './zag-timepicker.component.html',
  styleUrls: ['./zag-timepicker.component.scss']
})
export class ZagTimepickerComponent implements OnInit {

  @ViewChild('picker') picker: any;

  hourList: string[] = ['00','01','02','03','04','05','06','07','08','09','10','11','12',
  '13','14','15','16','17','18','19','20','21','22','23'];
  minuteList: string[] = ['00','01','02','03','04','05','06','07','08','09','10','11','12',
  '13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
  '31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49',
  '50','51','52','53','54','55','56','57','58','59'];

  hourSelected: string = "10";
  minuteSelected: string = "14";

  constructor() { }

  ngOnInit(): void {
    const now = new Date();
    this.hourSelected = now.getHours().toString();
    this.minuteSelected = now.getMinutes().toString();
    console.log("Now: ", now, "Hour: ", this.hourSelected, "Minute:", this.minuteSelected);
  }

}
