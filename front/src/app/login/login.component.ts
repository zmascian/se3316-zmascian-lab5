import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  logform: FormGroup;
  regform: FormGroup;
  constructor(private _http: HttpService, private _fb: FormBuilder, private _fb2: FormBuilder, private _router: Router) {
    this.logform = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.regform = this._fb2.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  log(){
    console.log("here3");
    this._http.login(this.logform.value).subscribe((res: any) =>{
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

  reg(){
    console.log("here2");
    this._http.register(this.regform.value).subscribe((res: any) =>{
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
