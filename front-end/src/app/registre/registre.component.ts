import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private session: AuthService,
    private router: Router
  ) { }

  newUser = {
    email: '',
    password: ''
  };
  isSignup = true;

  signup() {

    this.session.signup(this.newUser)
    .subscribe(user => {
      console.log(user);
this.router.navigate(['/board']);
    });
  }

  ngOnInit() {
  }

}
