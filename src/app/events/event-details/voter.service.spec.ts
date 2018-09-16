import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { Observable, of } from 'rxjs'

describe('voterService', () => {
    let voterService: VoterService,
    mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])//check rqd methods from service itself
        voterService= new VoterService(mockHttp);
    })


    describe('deleteVoter', () => {
        it('should remove voter from list of voters', () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(of(false));// to create observable
            voterService.deleteVoter(3, <ISession>session, "joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })
    })

})