import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss']
})
export class AddsongComponent implements OnInit {
addSongsForm: FormGroup;
constructor(private _http: HttpService, private _fb: FormBuilder, private _router: Router) {
  this.addSongsForm = this._fb.group({
    title: ['', Validators.required],
    artist: [''],
    album: [''],
    genre: [''],
    year: [''],
    avgRating: 0,
    numOfReviews: 0
  
  });
}

  ngOnInit() {
  }

  addSong(){
    this._http.addSong(this.addSongsForm.value).subscribe((res: any) =>{
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
