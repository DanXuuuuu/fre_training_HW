import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError,  } from 'rxjs';
import { AuthDto, Credentials, RegistrationData } from '../interfaces/auth.interface';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5566/api/v1/auth';
  private logIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>("");
  private userRole = new BehaviorSubject<string>("USER");

  isLoggedIn = this.logIn.asObservable();
  currentUserName = this.userName.asObservable();
  currentUserRole = this.userRole.asObservable();

  constructor(private http: HttpClient, private router: Router ) { }
  
  register(userData:RegistrationData): Observable<AuthDto> {
    return this.http.post<AuthDto>(`${this.apiUrl}/signup`,userData)
 }
  login(credentials: Credentials): Observable<AuthDto> {
    return this.http.post<AuthDto>(`${this.apiUrl}/signin`,credentials).pipe(
      tap((res:AuthDto)=>{
        this.userRole.next(res.role)
        this.handleToken(res.accessToken)
      })
    );
  }

  handleToken(token:string):void{
    const decodedToken:RegistrationData = jwtDecode(token);
    const userName:string = decodedToken.username || "";
    this.userName.next(userName)
    this.logIn.next(true)
    localStorage.setItem('authToken',token);
  }

  logout(): void {
    this.logIn.next(false);
    this.userName.next('');
    this.userRole.next('USER');
  
    localStorage.removeItem('authToken');
    
    this.router.navigate(['/home']);
  }


  updateRole(role:string):Observable<any>{
    const token = localStorage.getItem('authToken') || '';
    return this.http.patch(
      `${this.apiUrl}/userupdate`,
      {role:role},
      {headers: { Authorization: token }
    }
    ).pipe(
      tap((res:any)=>{
        this.userRole.next(res.role)
      }),
      catchError((error)=>{
        console.error('Role updatefailed:', error)
        return throwError('Role update failed!');
      })
    )
  }
}
 








