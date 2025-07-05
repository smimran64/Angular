import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  regForm!: FormGroup

  constructor(
    private authService: AuthService,
    private router : Router,
    private formBuilder: FormBuilder

  ){
    this.regForm = this.formBuilder.group({


      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      photo : ['', Validators.required]
    })
  }

  onSubmit(): void {

    if(this.regForm.invalid) {

      const user : User = {

        ...this.regForm.value,
        role : 'user'


      }


    }

if (this.regForm.valid) {

  const user: User = this.regForm.value;
  this.authService.registration(user).subscribe({

    next: (res) =>{

      console.log('Registration successful', res);
      this.authService.storeToken(res.token);
      
      this.router.navigate(['']);  
      


    },
    error:(err)=>{

      console.error('Registration failed', err);    


    }
  }) 

}
else {

  alert('Please fill all required fields correctly.');
}
  }

}
