import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logform: FormGroup;
  regform: FormGroup;
  constructor(private _http: HttpService, private _fb: FormBuilder, private _fb2: FormBuilder) {
    this.logform = this._fb.group({
      email: [''],
      password: ['']
    });
    this.regform = this._fb2.group({
      name: [''],
      email: [''],
      password: ['']
    });
   }

  ngOnInit() {
    this._http.myMethod();
  }

  log(){
    console.log("here");
  }

  reg(){
    console.log("here2");
  }
  

  
}
