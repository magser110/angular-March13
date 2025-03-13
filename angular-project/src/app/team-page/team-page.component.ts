import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-team-page',
  imports: [ProfileCardComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {
  profiles = [
    { name: 'alice johnson', role: 'software engineer', department: 'development', image: 'assests/alice.jpg'},
    { name: 'bob smith', role: 'product manager', department: 'product', image: 'assests/bob.jpg'},
    { name: 'catherine lee', role: 'ux designer', department: 'design', image: 'assests/catherin.jpg'},
  ];
}
