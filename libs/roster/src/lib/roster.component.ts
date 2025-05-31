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

  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    this.users$ = this.rosterService.getUserStats();
  }
}
