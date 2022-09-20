import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "src/app/model/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    data: Auth | null = null;
    error: any;

    constructor(
        private http: HttpClient,
        private router: Router) {}

    login({user, pass}: {user: string, pass: string}) {

        this.error = null;

        const params = new HttpParams()
            .set('user', user)
            .set('pass', pass)

        this.http.get<Auth>(`http://localhost:3000/login`, { params })
            .subscribe(
                res => {
                    this.data = res;
                    this.router.navigateByUrl('search');
                },
                err => this.error = err
            )
    }

    logout() {
        this.data = null;
        this.router.navigateByUrl('login');
    }

    isLogged() {
        const isAuth = this.data && this.data.token ? true : false;
        return isAuth;
    }

}
