import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../shared/user';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  loginForm!: FormGroup;
  user!: User;
  userCopy: User;
  errMess: string;
  showSpinner = false;
  showForm = true;
  @ViewChild('fform') loginFormDirective!: NgForm;
  formErrors = {
    username: '',
    password: '',
  };
  validationMessages = {
    username: {
      required: 'User Name is required.',
      minlength: 'User Name must be at least 2 characters long.',
      maxlength: 'User Name cannot be more than 25 characters long.',
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 2 characters long.',
      maxlength: 'Password cannot be more than 25 characters long.',
    }
  };

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ]
    });
    this.loginForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.showSpinner = true;
    this.showForm = false;
    this.user = this.loginForm.value;
    console.log(this.user);
    this.loginservice.submitLogin(this.user).subscribe(
      (user) => {
        this.showSpinner = false;
        this.user = user;
        setTimeout(() =>  {
          // tslint:disable-next-line:no-non-null-assertion
          this.user = null!;
          this.showForm = true;
      }, 5000);
      },
      (errmess) => {
        this.user = null;
        this.errMess = <any>errmess;
        this.showForm = true;
        this.showSpinner = false;
      }
    );
    this.loginForm.reset({
      username: '',
      password: '',
    });
    this.loginFormDirective.resetForm();
  }


}
