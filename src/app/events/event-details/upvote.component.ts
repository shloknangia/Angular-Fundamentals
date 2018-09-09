import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWigetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <!-- i *ngIf="voted" -->
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                    <!--<i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i> -->
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent{
    @Input() count: number;
    // @Input() voted: string;
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick(){
        this.vote.emit({});
    }

}