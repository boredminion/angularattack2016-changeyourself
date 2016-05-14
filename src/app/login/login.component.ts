import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from '@angular/common';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods  } from 'angularfire2';

@Component({
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')],
    directives: [FORM_DIRECTIVES]
})
export class LoginComponent {
    form:ControlGroup;
    email:AbstractControl;
    password:AbstractControl;

    constructor(public af:AngularFire, fb:FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    passwordLogin(form) {
        let promise = this.af.auth.login(form);
        promise.then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }

    facebookLogin() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        });
    }

    googleLogin() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });
    }

    twitterLogin() {
        this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Popup,
        });
    }

}
