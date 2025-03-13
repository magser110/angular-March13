import { Component, Signal, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  name: WritableSignal<string> = signal('');
  role: WritableSignal<string> = signal('');
  department: WritableSignal<string> = signal('');
  image: WritableSignal<string> = signal('');

  setProfileData(name: string, role: string, department: string, image: string) {
    this.name.set(name);
    this.role.set(role);
    this.department.set(department);
    this.image.set(image);
  }
}
