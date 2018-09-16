import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app',
  template:`
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <!--<events-list></events-list>-->
    `,
  /*template: '<h2>Hello World</h2>   <img src="/assets/images/basic-shield.png"/>',*/
})
export class EventsAppComponent implements OnInit {
  title = 'Angular Workshops';
  constructor(private auth: AuthService){}
  ngOnInit(){
    this.auth.checkAuthStatus();
    console.log("here");
  }
}
