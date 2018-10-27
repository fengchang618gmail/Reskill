import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
})
export class AngularMaterialModule { }
