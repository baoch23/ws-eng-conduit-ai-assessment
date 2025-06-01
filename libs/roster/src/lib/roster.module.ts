
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
