import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvoRoutingModule } from './convo-routing.module';
import { ConvoComponent } from './convo.component';
import { MaterialModule } from 'projects/material/src/public-api';


@NgModule({
  declarations: [ConvoComponent],
  imports: [
    CommonModule,
    ConvoRoutingModule,
    MaterialModule
  ],
  exports: [
    ConvoComponent
  ]
})
export class ConvoModule { }
