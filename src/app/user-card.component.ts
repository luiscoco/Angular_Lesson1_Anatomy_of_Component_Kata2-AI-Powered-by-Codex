import { Component } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  template: `
    <article class="user-card">
      <h2 class="user-card__name">Ada Lovelace</h2>
      <p class="user-card__role">Mathematician</p>
    </article>
  `,
  styles: [
    `
      .user-card {
        border: 1px solid #c9c9c9;
        border-radius: 8px;
        padding: 12px 16px;
        max-width: 260px;
        background: #f9f9f9;
      }

      .user-card__name {
        margin: 0 0 4px;
        font-size: 18px;
      }

      .user-card__role {
        margin: 0;
        color: #444;
      }
    `
  ]
})
export class UserCardComponent {}
