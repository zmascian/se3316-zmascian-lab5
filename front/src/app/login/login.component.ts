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
  confirmEmail: Boolean;
  link: Boolean;
  //Generates form groups
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
    this.confirmEmail = false;
   }

  ngOnInit() {
  }
//Called when user whats to log in
  log(){
    console.log("here3");
    this._http.login(this.logform.value).subscribe((res: any) =>{
      if(res.error){
        console.log(res.error);
        this._router.navigate(['/']);
      }
      else{
        console.log("no error");
        console.log(localStorage.getItem('access_token'));
        localStorage.setItem('access_token', res.token);
        console.log(localStorage.getItem('access_token'));
        this._router.navigate(['/addSongs']);
      }

    }
  );
  }
//User registration
  reg(){
    console.log("here2");
    this._http.register(this.regform.value).subscribe((res: any) =>{
      if(res.error){
        console.log('error');
        console.log(res.error);
        this._router.navigate(['/']);
      }
      else{
        console.log("no error");
        this.confirmEmail = true;
        this._router.navigate(['/addSongs']);

      }

    }
  
  );
    
    

  }

  confirmed(){
    this.link = true;
  }
  

  
}
