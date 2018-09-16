import  { Injectable } from "@angular/core"
import  { IUser } from "./user.model"
import { HttpClient, HttpHeaders } from "../../../node_modules/@angular/common/http";
import { tap, catchError } from "../../../node_modules/rxjs/operators";
import { of } from "../../../node_modules/rxjs";


@Injectable()
export class AuthService{
    currentUser: IUser 

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string){
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'John',
        //     lastName: 'Rambo'
        // }

        let loginInfo = {username: userName, password: password};
        const options = {headers: new HttpHeaders({'Content-Type': "application/json"})};
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(err => {
                return of(false);
            }))

    }

    isAuthenticated(){
        return !!this.currentUser;
    }
    
    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName; 
    }

    checkAuthStatus(){
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if(data instanceof Object){
                    this.currentUser = <IUser>data;
                    console.log(this.currentUser);
                }
            }
        ))

            // .subscribe(data => {
            //     if(data instanceof Object){
            //         this.currentUser = <IUser>data;
            //     }
            // })
    }
}