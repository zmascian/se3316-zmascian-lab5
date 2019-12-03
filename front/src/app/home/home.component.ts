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


   constructor(private _http: HttpService) {
    this.info = '';
    }

  ngOnInit() {
    this._http.getSongs().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    }
  );
  }
  
  infoClick(s: Object){
  //  this._http.getSongInfo(s).subscribe(data =>{

  //  });
  this.info = s;
  }

}
