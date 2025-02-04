import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RegistrationService } from '../../../Core/services/registration.service';

@Component({
  selector: 'app-api-key',
  standalone: false,
  
  templateUrl: './api-key.component.html',
  styleUrl: './api-key.component.scss'
})
export class ApiKeyComponent {
  apiKeyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService:RegistrationService
  ) {
    this.apiKeyForm = this.fb.group({
      username: ['', Validators.required],
      apiKey: ['', Validators.required],
    }); 

  }
 onSubmit() {
    if (this.apiKeyForm.valid) {
      this.registrationService.setApiKeyData(this.apiKeyForm.value)  
      console.log(this.registrationService.getRegistrationData())    
     this.router.navigate(["register/plan"]);
  }
}}