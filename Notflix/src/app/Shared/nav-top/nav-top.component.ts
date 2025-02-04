import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Core/services/auth.service';

@Component({
  selector: 'app-nav-top',
  standalone: false,
  
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.scss'
})
export class NavTopComponent implements OnInit{
  isLogIn:boolean = false;
  username:string = "";
  role:string = "";
  private subscriptions:any[] = [];
  constructor(private authService:AuthService){}
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authService.handleToken(token);
    }

    this.subscriptions.push(
      this.authService.isLoggedIn.subscribe((isLoggedIn) => {
        this.isLogIn = isLoggedIn;
      }),
      this.authService.currentUserName.subscribe((userName) => {
        this.username = userName;
      }),
      this.authService.currentUserRole.subscribe((userRole) => {
        this.role = userRole;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  logout() {
    this.authService.logout();
  }
}
