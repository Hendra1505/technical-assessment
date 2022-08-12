import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event: any) {
    event.preventDefault()
    const target = event.target
    const username = target.querrySelector('#username').value
    const password = target.querrySelector('#password').value

    this.Auth.getUserDetails(username, password).subscription((data: { success: any; message: any; }) => {
      if (data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }

}
