import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModal = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModal).subscribe(
        (response) => {
          this.toastrService.show(response.message);
          localStorage.setItem('token', response.data.token);
          console.log(response);
          this.router.navigate(['/products']);
        },
        (responseError) => {
         this.toastrService.error(responseError.error);
        }
      );
    }
  }
}
