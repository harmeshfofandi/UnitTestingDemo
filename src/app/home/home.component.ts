import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "welcome";
  constructor(private localStorage: LocalStorage, private router: Router) { }
  ngOnInit() {
  }
  signOut() {
    this.localStorage.removeItem('email').subscribe(() => { });
    this.router.navigate(['login']);
  }
}
