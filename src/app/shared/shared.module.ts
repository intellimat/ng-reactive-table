import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CardComponent, ConfirmationDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardComponent, ConfirmationDialogComponent, MaterialModule],
})
export class SharedModule {}
