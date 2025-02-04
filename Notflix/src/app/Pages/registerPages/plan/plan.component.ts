import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../Core/services/auth.service";
import { RegistrationService } from "../../../Core/services/registration.service";

@Component({
  selector: "app-plan",
  standalone: false,

  templateUrl: "./plan.component.html",
  styleUrl: "./plan.component.scss",
})
export class PlanComponent {
  selectedPlan: string = "basic";

  constructor(
    private router: Router,
    private authService: AuthService,
    private registrationService: RegistrationService
  ) {}

  selectPlan(plan: string): void {
    this.selectedPlan = plan;
  }

 

  navigateToList() {
    const data = this.registrationService.getRegistrationData()
    console.log(data)
      this.authService.register(data).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['/list']);
        }
      });
  error: (error: unknown) => {
      console.error('Error saving registration data:', error);
    }
  }
}
