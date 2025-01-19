import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      emailOrPhone: [
        '',
        [
          Validators.required  ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6), 
          ],
        ],
      });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Form Submitted:', this.loginForm.value);
  
 
        this.router.navigate(['/list'], { queryParams: this.loginForm.value });
      }
    }

}
