import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Song } from '../classes/song';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  songs: Object;
  s: Song;
  addReviewForm: FormGroup;

   constructor(private _http: HttpService, private _fb: FormBuilder, private _router: Router) { 
    this.addReviewForm = this._fb.group({
      comment: ['', Validators.required],
      rating: [''],
      name: [''],
      songId: ['']
    });
   }

  ngOnInit() {
    this._http.getSongs().subscribe(data => {
      this.songs = data
      console.log(this.songs);
    }
  );
  }

  revClick(s: Song){
    this.s = s;
    console.log(this.s);
    }

  addReview(){
      
      this._http.addReview(this.s, this.addReviewForm.value).subscribe((res: any) =>{
        if(res.error){
          console.log(res.error);
          this._router.navigate(['/']);
        }
        else{
          console.log("no error");
        }
  
      }
    );
  
    }

}
