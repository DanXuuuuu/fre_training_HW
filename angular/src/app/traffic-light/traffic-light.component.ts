import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {
  redLightActive = false;
  yellowLightActive = false;
  greenLightActive = false;

  ngOnInit() {
    this.startTrafficLightCycle();
  }

  startTrafficLightCycle() {
    setInterval(() => {
      // Red light phase
      this.redLightActive = true;
      this.yellowLightActive = false;
      this.greenLightActive = false;
      
      setTimeout(() => {
        // Green light phase
        this.redLightActive = false;
        this.yellowLightActive = false;
        this.greenLightActive = true;
        
        setTimeout(() => {
          // Yellow light phase
          this.redLightActive = false;
          this.yellowLightActive = true;
          this.greenLightActive = false;
          
          setTimeout(() => {
            // Reset to start the cycle again
            this.redLightActive = false;
            this.yellowLightActive = false;
            this.greenLightActive = false;
          }, 2000);
        }, 4000);
      }, 4000);
    }, 10000); // Total cycle time: 10 seconds
  }
} 