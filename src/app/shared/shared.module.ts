import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material-modulos
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SharedModule { }
