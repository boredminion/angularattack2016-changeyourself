import { Injectable, Output, EventEmitter } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService{
    @Output() authChanged = new EventEmitter();
    private authState: FirebaseAuthData|FirebaseAuthState;
    constructor(public auth$: FirebaseAuth) {
        this.authState = auth$.getAuth();

        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
            this.authChanged.emit(this.authState);
        });
    }

    get authenticated(): boolean {
        return this.authState !== null && !this.expired;
    }

    currentUser() {
        //if(!this.authState){
        //    return false
        //}
        //var user = {
        //    uid: this.authState.uid
        //};
        //switch (this.authState.provider){
        //    case 1:
        //        user.name = this.authState['twitter'].displayName;
        //        user.img = this.authState['twitter'].profileImageURL;
        //}
        //return user;
        return this.authState;
    }

    get expired(): boolean {
        return !this.authState || (this.authState.expires * 1000) < Date.now();
    }

    signOut(): void {
        this.auth$.logout();
    }

    getAuthChangeEmitter() {
        return this.authChanged;
    }
}