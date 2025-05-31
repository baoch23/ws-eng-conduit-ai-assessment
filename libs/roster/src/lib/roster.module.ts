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
