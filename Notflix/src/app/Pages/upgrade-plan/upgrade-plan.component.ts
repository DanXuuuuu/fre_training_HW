import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/services/auth.service';
import { RegistrationService } from '../../Core/services/registration.service';

@Component({
  selector: 'app-upgrade-plan',
  standalone: false,
  
  templateUrl: './upgrade-plan.component.html',
  styleUrl: './upgrade-plan.component.scss'
})
export class UpgradePlanComponent {

  selectedPlan: string = "";

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  

  selectPlan(plan: string): void {
    this.selectedPlan = plan;
  }
  
  upgradePlan(){
    this.authService.updateRole(this.selectedPlan).subscribe(()=>{
      this.router.navigate(['/list'])
    })
  }
}
