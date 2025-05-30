import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserStats } from 'libs/core/api-types/src/lib/user-stats';
import { mockUserStats } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  getUserStats(): Observable<UserStats[]> {
    return of(mockUserStats);
  }
}
