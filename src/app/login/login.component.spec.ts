import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerStub;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    }
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: routerStub }]
    })
  });
  beforeEach(() => {    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {    
    expect(component.form.valid).toBeFalsy();
  })

  it('check for email validation', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    let error = {};
    error = email.errors || {};
    expect(error['required']).toBeTruthy();

    email.setValue("admin")
    error = email.errors || {};
    expect(error['pattern']).toBeTruthy();

  })

  it('submitting and redirecting to home Page', () => { 
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("admin@admin");
    component.form.controls['password'].setValue("admin");
    expect(component.form.valid).toBeTruthy();
    component.login();
    expect(routerStub.navigate).toHaveBeenCalledWith(['home']);
  })

});
