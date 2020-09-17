import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
    exports: [
    MaterialComponents
    ]


})
export class MaterialModule { }
