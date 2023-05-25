import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private authService: AuthService, private router: Router ){}

  onSubmit(){
    console.log("onSubmit");
    this.authService.login(this.userForm.get("userName")!.value, this.userForm.get("password")!.value).subscribe((isAuthenticated) => {
      if (isAuthenticated!=0) {
        localStorage.setItem("id", isAuthenticated.toString());
        this.router.navigate(['/user']);
      } else {
        this.router.navigate(['/login']);
      }
    })
  }
}
