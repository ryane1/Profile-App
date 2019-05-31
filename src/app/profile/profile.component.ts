import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile: Profile;
  
  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
  editProfile(): void {
    this.profileService.editProfile();
  }
}
