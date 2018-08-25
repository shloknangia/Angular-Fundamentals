import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent},
    // /events/1 or /events/foo
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]