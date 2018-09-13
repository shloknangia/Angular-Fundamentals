import { Routes } from "@angular/router";
// import { EventsListComponent } from "./events/events-list.component";
// import { EventDetailsComponent } from "./events/event-details/event-details.component";
// import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
// import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
// import { EventListResolver } from "./events/events-list-resolver.service"

import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    // EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
  
  } from './events/index'


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent ,resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent,
    //  canActivate: [EventRouteActivator]},
     resolve: {event:EventResolver}},
    // /events/1 or /events/foo
    { path: 'events/sessions/new', component: CreateSessionComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren:'./user/user.module#UserModule'}
]