import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { MaterialModule } from 'projects/material/src/public-api';
import { ConvoModule } from '../convo/convo.module';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MaterialModule,
    ConvoModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule { }
