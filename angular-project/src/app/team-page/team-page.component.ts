import { Component, computed, signal } from '@angular/core';
// import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-team-page',
  // imports: [ProfileCardComponent],
  template:`
  <h1> our team</h1>
  <app-profile-card
    [name]="aliceName"
    [role]="aliceRole"
    [image]="aliceImage"
  ></app-profile-card>

  <app-profile-card
    [name]="bobName"
    [role]="bobRole"
    [image]="bobImage"
  ></app-profile-card>
  `,
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {
  aliceName = signal('alice johnson');
  aliceRole = signal('software engineer');
  aliceImage = signal('assests/alice.jpg');

  bobName = signal('bob smith');
  bobRole = signal('product manager');
  bobImage = signal('assests/bob.jpg');

  computedRole = computed(() => `role: ${this.bobRole()}`);

  // profiles = [
  //   { name: 'alice johnson', role: 'software engineer', department: 'development', image: 'assests/alice.jpg'},
  //   { name: 'bob smith', role: 'product manager', department: 'product', image: 'assests/bob.jpg'},
  //   { name: 'catherine lee', role: 'ux designer', department: 'design', image: 'assests/catherin.jpg'},
  // ];
}

this.aliceRole.set('lead software engineer');