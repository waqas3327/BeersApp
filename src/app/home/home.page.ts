import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: false;

  constructor(private router: Router, private formBuilder: FormBuilder, private service: UserService) {}
  loginForm: FormGroup;
  register() {
   this.router.navigate(['register']);
  }

  forgotPassword() {
    console.log('working on it!');
    this.router.navigate(['forgot-password']);
  }
  login() {
    try {
    const loginData = this.loginForm.value;
    console.log('loginData', loginData);
    this.service.userLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.router.navigate(['login']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
        alert('Wrong email or password!');
      }
    );
    } catch (ex) {
        console.log('ex', ex);
      }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = this.formBuilder.group({
       email: [null, [Validators.required, Validators.email]],
       password: [null, [Validators.required]]
    });
  }
}


