import { AuthService } from './../model/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: "auth.component.html"
    })
    export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;
    constructor(private router: Router, private auth:AuthService) {}
    authenticate(form: NgForm) {
        if (form.valid) {
        // perform authentication
        this.auth.authenticate(this.username, this.password)
        .subscribe(Response => {
            if(Response){
                this.router.navigateByUrl("/admin/main");
            }
            this.errorMessage = "Authentication Failed";
        })
        } 
        else {
        this.errorMessage = "Form Data Invalid";
        }
    }
}