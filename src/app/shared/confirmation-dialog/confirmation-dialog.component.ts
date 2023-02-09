import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Input() title = '';
  @Input() question = '';
  @Input() cancelText = '';
  @Input() confirmationText = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
