import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit{

  emailForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    }); 
  }

  get email(){
    return this.emailForm.get('email');
  }


  
  onSubmit(): void {
    if (this.emailForm.valid) {
      console.log('Form Submitted:', this.emailForm.value);
    }}

}
