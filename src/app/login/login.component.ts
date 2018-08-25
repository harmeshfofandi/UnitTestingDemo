import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { IUser } from '../../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  user: IUser;
  email: string;
  password: string;

  constructor(
    private router: Router,  
    private fb: FormBuilder,
    private localstorage: LocalStorage) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      password: ['', [Validators.required]]
    })
  }

  login() {
   
    let user: any = { email: this.form.value.email, password: this.form.value.password };
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    if (this.form.valid) {
      if (this.email == 'admin@admin' && this.password == 'admin') {
        this.localstorage.setItem('email', user).subscribe(() => { });
        this.router.navigate(['home']);
      } else {
        alert("Invalid credentials.")
      }
    }
  }
}


