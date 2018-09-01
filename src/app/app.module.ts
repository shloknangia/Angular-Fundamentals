import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './event-app.component';
// import { EventsListComponent } from './events/events-list.component'
// import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
// import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
// import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
// import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
   SessionListComponent
} from './events/index'


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    AuthService,
    EventListResolver,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  /*return false;*/
  if(component.isDirty){
    return window.confirm('You have not saved this event,do you really want to cancel?');
  }
  return true;

}