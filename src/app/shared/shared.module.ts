import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [FormsModule, ReactiveFormsModule, MatTableModule],
})
export class SharedModule {}
