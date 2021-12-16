import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    photo:
      'https://www.clipartmax.com/png/full/307-3078681_view-samegoogleiqdbsaucenao-1467773783956-funny-profile-pictures-for-steam.png',
    quote: '',
  };
  showAge: boolean = true;

  displayAge($event: Event) {
    this.showAge = !this.showAge;
  }
}
