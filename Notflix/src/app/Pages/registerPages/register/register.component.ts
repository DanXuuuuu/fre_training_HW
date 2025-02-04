import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../Core/services/auth.service";
import { RegistrationService } from "../../../Core/services/registration.service";

@Component({
  selector: "app-register",
  standalone: false,

  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  registerForm: FormGroup;
  email: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
ngOnInit(){
  this.route.queryParams.subscribe((params) => {
    this.email = params["email"];
    this.registerForm.patchValue({ email: this.email });
  });
}

  onSubmit() {
    if (this.registerForm.valid) {
          this.registrationService.setRegistrationData(this.registerForm.value)
          console.log(this.registrationService.getRegistrationData())
          this.router.navigate(["register/api-key"]);
      };
    }
  }
