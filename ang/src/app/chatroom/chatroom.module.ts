import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatroomRoutingModule } from './chatroom-routing.module';
import { MaterialModule } from 'projects/material/src/public-api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatroomRoutingModule,
    MaterialModule
  ]
})
export class ChatroomModule { }
