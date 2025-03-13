import { Component, Signal, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  template: `
  <div class="card">
    <img [src]="image()" alt="profile picture"/>
    <h2>{{ name() }}</h2>
    <p>{{ role() }}</p>
</div>`,
  styleUrl: './profile-card.component.css',
})



export class ProfileCardComponent {
  name!: Signal<string>;
  role!: Signal<string>;
  image!: Signal<string>;


  // name: WritableSignal<string> = signal('');
  // role: WritableSignal<string> = signal('');
  // department: WritableSignal<string> = signal('');
  // image: WritableSignal<string> = signal('');

  // setProfileData(name: string, role: string, department: string, image: string) {
  //   this.name.set(name);
  //   this.role.set(role);
  //   this.department.set(department);
  //   this.image.set(image);
  // }
}
