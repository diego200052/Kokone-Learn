import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.user);
    this.authService.signIn(this.user)
      .subscribe(
        res =>{
          console.log(res)
          if(res['status'] == "profesor")
          {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/profesor']);
          }
          else if(res['status'] == "alumno")
          {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/alumno']);
          }
          else
          {
            /* Usuario o contraseña incorrectos */
          }
      },
        error => console.log(error))
  }
}
