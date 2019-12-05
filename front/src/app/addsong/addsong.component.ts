import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Song } from '../classes/song';
import { Review } from '../classes/review';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss']
})
export class AddsongComponent implements OnInit {

addSongsForm: FormGroup;
songs: Object;
s: Song;
addReviewForm: FormGroup;
r: Review;
//Constructor makes form groups
constructor(private _http: HttpService, private _fb: FormBuilder, private _fb2: FormBuilder, private _router: Router) {
  this.addSongsForm = this._fb.group({
    title: ['', Validators.required],
    artist: [''],
    album: [''],
    genre: [''],
    year: [''],
    recentReview: [''],
    avgRating: 0,
    numOfReviews: 0
  
  });


  this.addReviewForm = this._fb2.group({
    comment: ['', Validators.required],
    rating: [''],
    name: [''],
    songId: ['']
  });
}

  ngOnInit() {
    //gets all songs to be displayed
    this._http.getSongs().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    }
  );
  }

  //called when user wants to submit a song
  addSong(){
    this._http.addSong(this.addSongsForm.value).subscribe((res: any) =>{
      if(res.error){
        console.log(res.error);
        this._router.navigate(['/']);
      }
      else{
        this._http.getSongs().subscribe(data => {
          this.songs = data
          console.log(this.songs);
        }
      );
        this.addReviewForm.value.comment = this.addSongsForm.value.recentReview;
    this.addReviewForm.value.rating = this.addSongsForm.value.avgRating;
    this.addReviewForm.value.comment = this.addSongsForm.value.recentReview;
        this._http.addReview(res, this.addReviewForm.value).subscribe((res: any) =>{
          if(res.error){
            console.log(res.error);
            this._router.navigate(['/']);
          }
        });
        console.log("no error");
      }

    }
    
  );
  

  }

  //Set review song to the song the user selected
  revClick(s: Song){
    this.s = s;
    console.log((<any> this.s)._id);
    }

    //User adds their review
  addReview(){
      this._http.addReview(this.s, this.addReviewForm.value).subscribe((res: any) =>{
        if(res.error){
          console.log(res.error);
          this._router.navigate(['/']);
        }
        else{
          //if nothing goes wrong update the song attributes
          this._http.updateSong(this.addReviewForm.value).subscribe((res: any) =>{
            if(res.error){
              console.log(res.error);
              this._router.navigate(['/']);
            }
          });
          
        }
  
      }
    );
  
    }

}
