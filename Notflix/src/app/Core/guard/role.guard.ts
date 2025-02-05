import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, Observable, } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(): Observable<boolean> {
      return this.authService.currentUserRole.pipe(
        map(role => {
          if (role === 'ADMIN'||role === 'SUPERUSER') {
            return true;
          }
          this.router.navigate(['register/upgrade-plan']);
          return false;
        })
      );
    }
  }