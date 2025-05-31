import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'apps/backend/src/user/user.entity';
import { RosterService } from 'apps/backend/src/roster/roster.service';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [],
  imports: [],
  standalone: true,
})
export class RosterComponent implements OnInit {
  users$: Observable<User[]>;
  summaryStats = [
    { title: 'Total Users', value: 0 },
    { title: 'Total Favorites', value: 0 },
  ];

  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    this.users$ = this.rosterService.getUserStats();
    this.users$.subscribe(users => {
      this.summaryStats[0].value = users.length;
      this.summaryStats[1].value = users.reduce((acc, user) => acc + user.totalFavorites, 0);
    });
  }
}
