import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { MaterialModule } from 'projects/material/src/public-api';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MaterialModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule { }
