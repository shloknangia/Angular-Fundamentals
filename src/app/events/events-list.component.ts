import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    /*templateUrl: 'events-list.component.html'*/
    template: `
        <div>
            <h1>Upcomming Angular Events</h1>
            <hr/>
            <div class="well">
                <div>Hello World</div>
            </div>
            <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        </div>
        `,
        styles: [`
            .well div { color: red; }
        `]
})

export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-sheld.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
    /*handleEventClicked(data){
        console.log('received:', data)
    }*/
}