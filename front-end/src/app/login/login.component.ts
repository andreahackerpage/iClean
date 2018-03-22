import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private session: AuthService, private route: Router) { }
  user = {
    email: '',
    password: ''
  };
  isLogin = true;

  ngOnInit() {
  }

  login() {
    this.session.login(this.user)
    .subscribe(user => this.route.navigate(['board']));
  }
  }
