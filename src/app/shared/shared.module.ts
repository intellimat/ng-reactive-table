import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardComponent, ConfirmationDialogComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardComponent, ConfirmationDialogComponent],
})
export class SharedModule {}
