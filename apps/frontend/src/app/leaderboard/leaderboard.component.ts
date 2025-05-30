import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardService } from './leaderboard.service';
import { UserStats } from 'libs/core/api-types/src/lib/user-stats';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  users$: Observable<UserStats[]> = this.leaderboardService.getUserStats();

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {}
}
