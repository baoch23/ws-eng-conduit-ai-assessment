import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from '@realworld/core/http-client';

@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://your-api-url.com' }
  ],
  imports: [HttpClientModule],
import { CommonModule } from '@angular/common';

import { RosterComponent } from './roster.component';

@NgModule({
  declarations: [RosterComponent],
  imports: [CommonModule],
  exports: [RosterComponent],
})
export class RosterModule {}
