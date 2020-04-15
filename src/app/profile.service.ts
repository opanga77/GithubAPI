import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private accesstoken = "5a002f76d318002164c44134b67b39f6774a83c5";

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'opanga77';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.accesstoken)
    // .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.accesstoken)
    // .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}
 