import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-plan",
  standalone: false,

  templateUrl: "./plan.component.html",
  styleUrl: "./plan.component.scss",
})
export class PlanComponent {

  selectedPlan: string = 'basic';
  constructor(private router: Router) {}

  selectPlan(plan: string): void {
    this.selectedPlan = plan;
  }

}
