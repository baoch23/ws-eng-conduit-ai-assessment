import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStats } from '@app/core/api-types';
import { RosterService } from './roster.service';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: [],
  providers: [],
  imports: [],
  standalone: true,
})
export class RosterComponent implements OnInit {
  users$: Observable<UserStats[]>;
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
