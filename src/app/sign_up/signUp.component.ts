import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from '@angular/common';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods  } from 'angularfire2';
import { Router } from '@angular/router-deprecated'

@Component({
    selector: 'my-signUp',
    template: require('./signUp.component.html'),
    styles: [require('./signUp.component.scss')],
    directives: [FORM_DIRECTIVES]
})
export class SignUpComponent {
    form: ControlGroup;
    email: AbstractControl;
    password: AbstractControl;
    confirm: AbstractControl;
    massage: string;

    constructor(public af: AngularFire, fb: FormBuilder, public router: Router) {
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'confirm': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirm = this.form.controls['confirm'];
    }

    passwordLogin(form) {
        let promise = this.af.auth.login(form);
        promise.then(response => {
            this.router.navigate(['Home']);
        }).catch(err => {
            this.massage = "The specified user does not exist.";
        });
    }

    facebookLogin() {
        let promise = this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        });
        promise.then(response => {
            this.router.navigate(['Home']);
            console.log(response);
        }).catch(err => {
            console.log(err);
            this.router.navigate(['Home']);
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
