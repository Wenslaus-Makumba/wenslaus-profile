import { Component, OnInit } from '@angular/core';
import { MyProfileInfo } from './personal-profile-info-class/my-profile-info';
import { MyProfileInfoRequestService } from './my-profile-info-service-http/my-profile-info-request.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GitHubApi';
  
  repos: any[];

  myProfileInfo: MyProfileInfo;
  myProfileInfoRequestService:MyProfileInfoRequestService;



  constructor(private myProfileInfoService:MyProfileInfoRequestService) {
    
   

  }

  ngOnInit(){
    this.myProfileInfoService.profileInfoRequest();
    this.myProfileInfo = this.myProfileInfoService.myProfileInfo;
    this.myProfileInfoRequestService.getProfileRepos();
    this.repos = this.repos;
  } 
}  
