import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songs: Object;
  info: Object;
  dm: Boolean;


   constructor(private _http: HttpService) {
    this.info = '';
    
    }

  ngOnInit() {
    //Gets all songs
    this._http.getSongs().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    }
  );
  }
  
  //info is saved as the song the user selects to view its attributes
  infoClick(s: Object){
  this.info = s;
  console.log(this.info);
  }

  dmca(){
    this.dm = true;
  }

}
