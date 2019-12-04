import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  l: Boolean;
  // isLoggedIn(){
  //   this.l = false;
  //   while(this.l!= true){
  //   let authToken = localStorage.getItem('access_token');
  //   if(authToken !== null) {
  //     this.l = true;
  //   }
  //   }
  // }
  ngOnInit() {
    // this.l =false;
    // localStorage.setItem('access_token', null);
    // console.log(localStorage.getItem('access_token'));
    // let authToken = localStorage.getItem('access_token');
    // if(authToken == null) {
    //   this.l = true;
    // }
  }
}
