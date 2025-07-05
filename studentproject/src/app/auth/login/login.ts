import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{

  loginForm!: FormGroup;

  constructor(

    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ){

    this.loginForm = this.formBuilder.group({

      email :[''],
      password : ['']

    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){

      const userDetails = this.loginForm.value;
      this.authService.login(userDetails).subscribe({

        next : (res)=> {

          console.log('User login successful',res );
          this.authService.storeToken(res.token);

          const role = this.authService.getUserRole();
          this.router.navigate(['/userprofile']);
        }

      })


    }
  }


 

}
