import { User } from './User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = new User();
  minlength = 3;
  maxlength = 15;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // form submitted
    console.log(this.user);
  }
}
