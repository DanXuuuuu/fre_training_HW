import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationData } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationData!: RegistrationData;
  private apiUrl = 'http://your-backend-url/api';  

  constructor(private http: HttpClient) {}

  setRegistrationData(data:{email:string,password:string}):void{
    this.registrationData ={...this.registrationData,...data}
  
}
  setApiKeyData(data:{username:string,apiKey:string}): void {
    this.registrationData ={...this.registrationData,...data}
  }
  setPlanData(plan:string):void{
    this.registrationData.selectedPlan = plan;
  }
  getRegistrationData(){
    return this.registrationData
  }
  cleaRegistrationData(){
    this.registrationData = {}
  }
}