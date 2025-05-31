
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import { RouterModule } from '@angular/router';
import { ROSTER_ROUTES } from './roster.routes';
import { API_URL } from 'apps/frontend/src/app/roster/roster.service';
import { RosterService } from './roster.service';
@NgModule({
  declarations: [RosterComponent],
  imports: [CommonModule, RouterModule.forChild(ROSTER_ROUTES)],
  exports: [RosterComponent],
  providers: [
    RosterService,
    { provide: API_URL, useValue: 'https://your-api-url.com' }
  ]

})
export class RosterModule {}
