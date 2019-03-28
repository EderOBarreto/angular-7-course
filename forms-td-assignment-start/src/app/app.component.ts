import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultSubscription = 'advanced';
  user =  {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.subscription = this.form.value.subscription;
    this.submitted = true;
    console.log(this.form);
  }
}
