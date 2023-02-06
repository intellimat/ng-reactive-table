import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
})
export class MaterialModule {}
