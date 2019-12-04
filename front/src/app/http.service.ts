import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from './classes/user';
import { Song } from './classes/song';
import { Review } from './classes/review';
//url

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }
  baseUrl: string = 'http://localhost:3000/api'; 

  login(u: User) {
    console.log("here8");
    return this.http.post(this.baseUrl+"/user/login", u); 
    
  }
  register(u: User) {
    console.log("yes");
    return this.http.post(this.baseUrl+"/user/register", u); 
  }

  getSongs(){
    return this.http.get(this.baseUrl+"/songs/getsongs");
  }

  addSong(s: Song){
    return this.http.put(this.baseUrl+"/songs/putsongs", s);
  }

  addReview(s: Song, r: Review){
    r.songId = (<any> s)._id;
    r.name = "zem44@live.ca"; //token here
    return this.http.put(this.baseUrl+"/review/putreview", r);
  }

  updateSong(r: Review){
    return this.http.put(this.baseUrl+"/review/updatesong",r);
  }
}
