import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template:`
    <nav-bar></nav-bar>
    <events-list></events-list>
    `,
  /*template: '<h2>Hello World</h2>   <img src="/assets/images/basic-shield.png"/>',*/
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
