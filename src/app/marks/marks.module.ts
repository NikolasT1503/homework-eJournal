import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarksComponent } from './marks.component';
import { MarksformComponent } from './marksform/marksform.component';

@NgModule({
  declarations: [MarksComponent, MarksformComponent],
  imports: [CommonModule],
  exports: [MarksComponent, MarksformComponent],
})
export class MarksModule {}
