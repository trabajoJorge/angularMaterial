import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  exports : [ MatButtonModule,
              MatCardModule,
              MatIconModule,
              MatInputModule,
              MatSliderModule,
              MatFormFieldModule,
              MatSelectModule,
              MatDialogModule
            ]
})
export class MaterialModule { }
