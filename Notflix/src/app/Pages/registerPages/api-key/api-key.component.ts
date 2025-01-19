import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-api-key',
  standalone: false,
  
  templateUrl: './api-key.component.html',
  styleUrl: './api-key.component.scss'
})
export class ApiKeyComponent {
  apiKeyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.apiKeyForm = this.fb.group({
      username: ['', Validators.required],
      apiKey: ['', Validators.required],
    }); 



    this.route.queryParams.subscribe((params) => {
      console.log('Received query params:', params);
    });
  }
 onSubmit() {
    if (this.apiKeyForm.valid) {
      console.log('API Key Form Submitted:', this.apiKeyForm.value);

      
      this.router.navigate(['register/plan'], { queryParams: this.apiKeyForm.value });
    }
  }
}