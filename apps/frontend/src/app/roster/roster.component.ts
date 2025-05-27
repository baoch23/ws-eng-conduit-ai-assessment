import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@realworld/core/api-types';
import { RosterService } from './roster.service';

@Component({
  selector: 'cdt-roster',
  standalone: true,
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RosterComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private rosterService: RosterService, private store: Store) {}

  ngOnInit() {
    this.users$ = this.rosterService.getRoster();
  }
}
