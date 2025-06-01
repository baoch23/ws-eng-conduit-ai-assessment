import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from '@realworld/core/api-types';
import { RosterService } from './roster.service';
import { API_URL } from 'apps/frontend/src/app/roster/roster.service';


@Component({
  selector: 'cdt-roster',
  standalone: true,
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  providers: [
    RosterService,
    { provide: API_URL, useValue: 'https://studious-journey-wr4rg656ggqvc66q-3000.app.github.dev' }
  ]
})
export class RosterComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.users$ = this.rosterService.getRoster();
  }
}
