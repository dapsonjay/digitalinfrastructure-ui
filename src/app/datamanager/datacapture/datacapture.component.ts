import { ProfileDTOService } from './../../services/profile-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileDTO } from "src/app/model/profileDTO";



interface Position {
  name: string;
  viewName: string;
}

@Component({
  selector: 'app-datacapture',
  templateUrl: './datacapture.component.html',
  styleUrls: ['./datacapture.component.scss']
})
export class DatacaptureComponent implements OnInit {

  positions: Position[] = [
    {name: 'Project Manager', viewName: 'Project Manager'},
    {name: 'Managing Director', viewName: 'Managing Director'},
    {name: 'Office Assistance', viewName: 'Office Assistance'},
    {name: 'Project Director', viewName: 'Project Director'},
    {name: 'Board Member', viewName: 'Board Member'},
  ]

  topTitle: string = "ZADG Data Capture";

  hide = true;
  firstname: any;
  profileDTO: ProfileDTO = new ProfileDTO();
  employee: boolean = false;
  memberOrg: boolean = false;
  indMember: boolean = false;

  constructor(private profileDTOService: ProfileDTOService) {

   }

  ngOnInit(): void {
    // this.profileDTO = this.profileDTOService.getDummyProfile();
    this.getProfile();
    this.firstname = this.profileDTO.firstname;
  }

  onSubmit() : void {
    //console.warn('User data has been submitted');
    console.warn(this.profileDTO);
    this.profileDTOService.sendByPost(this.profileDTO);
  }

  getProfile(): void {
    this.profileDTOService.getProfileDTO("searchString")
                           .subscribe(profData => this.profileDTO = profData);
  }

  showProfileDTO(event: any) {
    console.warn(JSON.stringify(event));
    console.log(this.profileDTO);
  }

}
