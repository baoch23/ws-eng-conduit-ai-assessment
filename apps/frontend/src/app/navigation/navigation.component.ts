import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/roster">Roster</a></li>
        <!-- Add more links as needed -->
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      background-color: #f8f9fa;
      padding: 10px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline;
      margin-right: 10px;
    }
  `]
})
export class NavigationComponent {}
