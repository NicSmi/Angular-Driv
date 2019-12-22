import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatLineModule,
  MatDividerModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatLineModule,
  MatBadgeModule
  ],
  exports: [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatLineModule,
  MatDividerModule,
  MatBadgeModule
  ]
  //exports: [MaterialComponent]
})
export class MaterialModule { }
