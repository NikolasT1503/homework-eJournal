import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarksComponent } from './marks.component';

@NgModule({
  declarations: [MarksComponent],
  imports: [CommonModule],
  exports: [MarksComponent],
})
export class MarksModule {}
