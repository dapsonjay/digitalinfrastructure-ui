import { ProfileDTOService } from '../services/profile-data.service';
import { Component, OnInit } from '@angular/core';
import { ProfileDTO } from "src/app/model/profileDTO";

interface Position {
  name: string;
  viewName: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  positions: Position[] = [
    {name: 'Project Manager', viewName: 'Project Manager'},
    {name: 'Managing Director', viewName: 'Managing Director'},
    {name: 'Office Assistance', viewName: 'Office Assistance'},
    {name: 'Project Director', viewName: 'Project Director'},
    {name: 'Board Member', viewName: 'Board Member'},
  ]

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
