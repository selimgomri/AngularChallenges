import { SignupComponent } from './../signup/signup.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: UserProfileComponent },

];

export { ROUTES };
