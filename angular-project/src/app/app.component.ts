import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CounterComponent } from "./counter/counter.component";
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, CounterComponent, ProfileCardComponent, TeamPageComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
