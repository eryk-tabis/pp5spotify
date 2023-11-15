import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  recive_data: any = localStorage.getItem('register');
  data: any = this.recive_data ? JSON.parse(this.recive_data) : null;
  registerForm: FormGroup;
  outputRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      number: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      checkbox: [false, Validators.required],
      date: ['', Validators.required,],

    });
    this.outputRegisterForm = this.fb.group({
      username: [''],
      password: [''],
      email: ['',],
      number: [null,],
      checkbox: [false, ],
      date: ['',],
    });
  }
    submitForm(): void {
    if(this.registerForm.valid) {
      const formDataJson = JSON.stringify(this.registerForm.value);
      localStorage.setItem('register', formDataJson);
      this.data = this.registerForm.value;
      console.log('Form Data: ', this.registerForm.value);
    }
  }
  clearForm(): void {
    localStorage.removeItem('register');
    this.data = null;
  }
}
