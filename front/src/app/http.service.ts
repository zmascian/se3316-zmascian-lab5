import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from './classes/user';
import { Song } from './classes/song';
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
}
