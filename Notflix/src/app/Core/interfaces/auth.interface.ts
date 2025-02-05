export interface RegistrationData {
    email?:string;
    password?:string;
    apiKey?:string;
    username?:string; 
    selectedPlan?: string;
    plan?: string;
    role?: string;
  }

  export interface AuthDto {
    accessToken:string;
    role:string;
  }

  export interface Credentials {
    email:string;
    password:string;
  }