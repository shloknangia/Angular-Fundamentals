import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div>
            <div [routerLink]="['/events', event.id]" class="well howerwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <!--<div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">-->
                <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">-->
                <!--<div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' :'#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">-->
                <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                    Time: {{event.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
                <div>Price: \${{event.price}}</div>
                <div *ngIf="event?.location">
                    <span>Location: {{event.location?.address}}</span>
                    <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
                </div>
                <div *ngIf="event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>
            </div>
            <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>-->
        </div>
        `,
        styles: [`
            .bold { font-weight: bold; }
            .green { color: #003300 !important; }
            .thumbnail { min-height: 210px }
            .pad-left { margin-left: 10px; }
            .well div { color: #bbb; }
        `]
})

export class EventThumbnailComponent{
    @Input() event: any

    /*@Output() eventClick = new EventEmitter();

    handleClickMe(){
        console.log("clicked");
        this.eventClick.emit(this.event.name);
    }*/

    /*someProperty: any = "some value";
    logfoo(){
        console.log('foo');
    }*/

    getStartTimeClass(){
        /*const  isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
        use this or below one
        if(this.event && this.event.time === '8:00 am')
            return 'green bold'
        return ''
        use this or below one
        */
        if(this.event && this.event.time === '8:00 am')
            return ['green',' bold']
        return []
    }    

    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
}