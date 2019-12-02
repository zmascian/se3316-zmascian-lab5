import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss']
})
export class AddsongComponent implements OnInit {
fdjklajfdl: FormGroup;
  constructor(private _http: HttpService, private _fb: FormBuilder) {
    this.fdjklajfdl = this._fb.group({


      
    });

    

   }

  ngOnInit() {
  }

}
