import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/material/src/public-api';
import { MessageModule } from './message/message.module';
import { ConvoModule } from './convo/convo.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { ChatroomListComponent } from './chatroom/chatroom-list/chatroom-list.component';
import { ChatroomMessagesComponent } from './chatroom/chatroom-messages/chatroom-messages.component';
// import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ChatroomListComponent,
    ChatroomMessagesComponent
  ],
  imports: [
    ChatroomModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MessageModule,
    ConvoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
