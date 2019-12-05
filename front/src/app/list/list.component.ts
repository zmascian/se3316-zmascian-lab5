import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Song } from '../classes/song';
import { Review } from '../classes/review';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  songs: Object;
  review: Object;
  matchingReviews: Review;
  rSong: Song;


   constructor(private _http: HttpService, private _router: Router) { 
   
   }

  ngOnInit() {
//Get all songs
    this._http.getSongs().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    }
  );
  }

  getReviews(s:Song){
    //Get all reviews
    this.rSong = s;
    this._http.getReview().subscribe(data => {
      this.review = data
      console.log(this.review);
    }
    );
     
  }

}
