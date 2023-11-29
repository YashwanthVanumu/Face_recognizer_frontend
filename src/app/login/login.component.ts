import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { MyserviceService } from '../myservice.service';
=======
import { MyServiceService } from '../my-service.service';
>>>>>>> 28de35cb14fbdbfaa4ff94e0a2dde382f40837f6

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  logo="../assets/astreya-logo.jpeg"
<<<<<<< HEAD
  // username : string = '';
  // password : string = '';
  // constructor(private router: Router, private authService: MyserviceService) {}

  // onsave() {
  //   // Perform your authentication logic here.
  //   this.authService.login(this.username, this.password).subscribe((response) => {
  //     // Handle the response from the backend, e.g., set user authentication status, navigate to another page, etc.
  //     console.log(response);
  //     this.router.navigate(['/welcome-admin']);
  //   });

   constructor(private router: Router) {}
  onsave(){

  this.router.navigate(['/welcome-admin']);
=======
  username : string = '';
  password : string = '';
  constructor(private router: Router, private authService: MyServiceService) {}

  onsave() {
    // Perform your authentication logic here.
    this.authService.login(this.username, this.password).subscribe((response) => {
      // Handle the response from the backend, e.g., set user authentication status, navigate to another page, etc.
      console.log(response);
      this.router.navigate(['/user']);
    });
    // For simplicity, let's assume validation always succeeds.
    // In a real application, you'd check user credentials against a backend service.

    // Redirect to the home page upon successful login.
    
>>>>>>> 28de35cb14fbdbfaa4ff94e0a2dde382f40837f6
  }
  }


  

