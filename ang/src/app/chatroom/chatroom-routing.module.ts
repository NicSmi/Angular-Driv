import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatroomMessagesComponent } from './chatroom-messages/chatroom-messages.component';


const routes: Routes = [
  { path: 'chatroom', component: ChatroomListComponent },
  { path: 'chatroom/:id', component: ChatroomMessagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule { }
