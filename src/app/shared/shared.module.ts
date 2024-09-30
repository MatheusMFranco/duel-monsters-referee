import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnonymousTemplateComponent } from './anonymous-template/anonymous-template.component';

@NgModule({
  declarations: [
    AnonymousTemplateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnonymousTemplateComponent,
  ],
})
export class SharedModule { }
