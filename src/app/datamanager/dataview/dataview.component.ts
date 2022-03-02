import { ProfileDTO } from './../../model/profileDTO';
import { map } from 'rxjs/operators';
import { PageableProfileDataDto } from './../../model/pageprofiledto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ProfileDTOService } from 'src/app/services/profile-data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { finalize, first } from 'rxjs/operators';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {

  topTitle: string = "ZAGD Data View";

  pageProfileDataDTO?: PageableProfileDataDto | null;
  // pageProfileDataDTO: any = null;
  profileData: ProfileDTO[] = [];
  loading = false;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator | undefined;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  displayedColumns = ['select', 'id', 'firstname', 'lastname', 'email', 'phoneNr'];
  expandedProfileData: ProfileDTO = new ProfileDTO;

  selection = new SelectionModel<ProfileDTO>(true, []);

  datasource = new MatTableDataSource<ProfileDTO>();

  searchValue: string = "";

  totalElements: number = 0;

  constructor(private route: ActivatedRoute,
              private profileDTOService: ProfileDTOService) { }

  ngOnInit(): void {
    this.profileData = this.route.snapshot.data["profileData"];
    // this.loadProfileData("");
  }

loadProfileData(searchtext: string) {
    this.loading = true;
    this.searchValue = searchtext;
    console.log(`Search string ${this.searchValue}`);
    this.profileDTOService.getProfilesData(this.searchValue, 0, 15, 'lastname', 'asc')
                          .subscribe((res) => {
                            this.pageProfileDataDTO = res;
                            this.profileData = this.pageProfileDataDTO?.profileDTO;
                            console.log(this.pageProfileDataDTO?.profileDTO);
                            console.log(this.profileData)
                           },
                           (error) => {
                             console.log("Error occur");
                             this.loading = false;
                          },
                           () => {
                              this.loading = false;
                           });

  }

  onToggleProfile(profileDTO: ProfileDTO) {
    if(profileDTO == this.expandedProfileData) {
      this.expandedProfileData = new ProfileDTO;
    } else {
      this.expandedProfileData = profileDTO;
    }
  }

  toggleAll() {
    if(this.isAllSelected()) {
      this.selection.clear();
    }
  }

  isAllSelected() {
    return this.selection.selected?.length == this.profileData.length;
  }

  onProfileToggled(profileDTO: ProfileDTO) {
    this.selection.toggle(profileDTO);
    console.log(this.selection.selected);
  }

  onSearch() {

  }

}
