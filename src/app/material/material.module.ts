import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  exports: [MatInputModule, ReactiveFormsModule, MatCardModule],
})
export class MaterialModule {}
