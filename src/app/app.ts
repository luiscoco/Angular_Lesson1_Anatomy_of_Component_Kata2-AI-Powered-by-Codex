import { Component, signal } from '@angular/core';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kata2');

  constructor() {
    setTimeout(() => {
      const host = document.getElementById('imperative-host');
      if (!host) {
        return;
      }

      const card = document.createElement('user-card');
      card.textContent = 'Imperative attempt (not Angular-managed)';
      host.appendChild(card);
    });
  }
}
