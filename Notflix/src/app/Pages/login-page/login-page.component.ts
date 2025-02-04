import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../Core/services/auth.service";

@Component({
  selector: "app-login-page",
  standalone: false,

  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
         console.log(response)
          this.router.navigate(['/list']);
          
        },
        error: (error) => {
          console.error('Login failed:', error);
       
        }
      });
    }
  }
}
