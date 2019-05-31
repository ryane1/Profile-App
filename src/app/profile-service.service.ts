import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

private profile: Profile ={
  name:"Ryan",
  contactInfo: "ryan@ryan.com",
  bio: "I love Beyonce!"
};

  constructor(private router: Router) { }

getUserProfile(): Profile {

  return this.profile;
}
setUserProfile (newProfile: Profile): Profile {
  this.profile = newProfile;
  return this.profile;
}

editProfile(): void {
  this.router.navigate(["edit-profile"]);
}
}