import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProfileInfo } from '../personal-profile-info-class/my-profile-info';
import { SearchedProfileInfo } from '../searched-profile-info-class/searched-profile-info';
// import { JsonPipe } from '@angular/common';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyProfileInfoRequestService {

  myProfileInfo: MyProfileInfo;
  searchedProfileInfo: SearchedProfileInfo;
  

  gitApiUrl: string = "http://api.github.com/users/";
  username:string = "EinsteinElaim";
  apiKey:any = "43b05c67002de5db3b9a9e8f5c2768f778572f9a";
  clientid:string = "c2d5a816854dcd2ff98f";
  clientsecret:string = "a84cb93f709d48c6a15a46dd436ba36361bc1534";  


  constructor(private http:HttpClient) {
    this.myProfileInfo = new MyProfileInfo("", "", "", "","","","","","","", "");
    this.searchedProfileInfo = new SearchedProfileInfo("", "", "");
  }

  getProfileRepos(){
    interface Response{
      name: string;
      html_url: string;
      description: string;
    }


    let gitRepos = new Promise((resolve,reject)=>{
      this.http.get<Response>(this.gitApiUrl + this.username + "/repos?client_id=" 
      + this.clientid + "&client_secret=" + this.clientsecret).toPromise().then(response=>{
        this.searchedProfileInfo.name = response.name
        this.searchedProfileInfo.html_url = response.html_url
        this.searchedProfileInfo.description = response.description
        resolve()
      },
      error=>{
        this.searchedProfileInfo.name = "Error"
        this.searchedProfileInfo.description = "Resource can not be found!"

        reject(error)
      })
    })
    return gitRepos


  }

  profileInfoRequest(){
    interface ApiResponse{
      login: string;
      name: string;
      location: string;
      avatar_url: string;
      blog: string;
      company: string;
      bio: string;
      public_repos: string;
      public_gists: string;
      hireable: string;
      email: string;
    }

  //using promises to work with responses and errors we get

  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(this.gitApiUrl + this.username + "?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret).toPromise().then(response=>{
      this.myProfileInfo.login = response.login
      this.myProfileInfo.name = response.name
      this.myProfileInfo.location = response.location
      this.myProfileInfo.avatar_url = response.avatar_url
      this.myProfileInfo.blog = response.blog
      this.myProfileInfo.company = response.company
      this.myProfileInfo.bio = response.bio
      this.myProfileInfo.public_repos = response.public_repos
      this.myProfileInfo.public_gists = response.public_gists
      this.myProfileInfo.hireable = response.hireable
      this.myProfileInfo.email = response.email
      resolve()
    },
    error=>{
      this.myProfileInfo.name = "Error"
      this.myProfileInfo.login = "Resource can not be found!"

      reject(error)
    })
  })
  return promise
}

}
