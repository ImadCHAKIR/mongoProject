import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router ) { }

  login(username: string | null, password: string | null){
    let user = { "username": username, "password": password};
    return this.http.post<number>("http://localhost:30000/login",user);
  }

  logout(): void {
    localStorage.removeItem("id");
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  signup(username: string | null, password: string | null){
    let user = { "username": username, "password": password};
    return this.http.post<number>("http://localhost:30000/signup",user);
  }
}
