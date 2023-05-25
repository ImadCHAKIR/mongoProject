import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userForm = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private authService: AuthService, private router: Router ){}

  onSubmit(){
    this.authService.signup(this.userForm.get("userName")!.value, this.userForm.get("password")!.value).subscribe((result)=>{
        if(result){
          this.router.navigate(['/login']);
        }
    })
  }
}
