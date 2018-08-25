import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';;
import { LoginComponent } from './login/login.component';
import { LocalStorage } from '@ngx-pwa/local-storage';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
    email: any;
    constructor(private router: Router, private localStorage: LocalStorage) {
        this.needtologin();
    }
    needtologin() {
        this.localStorage.getItem('email').subscribe((data) => {
            if (typeof data !== 'undefined' && data !== null) {
                this.email = data.email;
                this.router.navigate(['home']);
            } else {
                this.router.navigate(['login']);
            }
        });
    }   


}