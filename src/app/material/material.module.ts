import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
