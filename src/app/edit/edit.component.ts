import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profile: Profile;
 
  constructor(private profileService: ProfileServiceService, private router: Router) { }


  ngOnInit() {
   this.profile = this.profileService.getUserProfile();
  }
  saveProfile(form) {
    const newProfile: Profile = {
      name: form.value.name,
      contactInfo: form.value.contactInfo,
      bio: form.value.bio
  };
  this.profileService.setUserProfile(newProfile);
  this.router.navigate(["profile"]);
}
}