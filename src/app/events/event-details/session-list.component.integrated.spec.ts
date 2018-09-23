import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from '@angular/core'
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { By } from "@angular/platform-browser";

describe('sessionListComponent', () => {
    let fixure: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {};
        let mockVoterService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        TestBed.createComponent(SessionListComponent);
        component = fixure.componentInstance;
        debugEl = fixure.debugElement;
        element = fixure.nativeElement;
    })
})