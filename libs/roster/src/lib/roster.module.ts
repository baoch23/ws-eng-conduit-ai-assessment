import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from '@realworld/core/http-client';

@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://your-api-url.com' }
  ],
  imports: [HttpClientModule,CommonModule],
  declarations: [RosterComponent],
  exports: [RosterComponent],
})
export class RosterModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import { RouterModule } from '@angular/router';
import { ROSTER_ROUTES } from './roster.routes';

@NgModule({
  declarations: [RosterComponent],
  imports: [CommonModule, RouterModule.forChild(ROSTER_ROUTES)],
  exports: [RosterComponent],
})
export class RosterModule {}
