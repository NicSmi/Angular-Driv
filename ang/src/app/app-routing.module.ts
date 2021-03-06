import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MessageComponent } from './message/message.component';


const routes: Routes = [
  // { path: 'message', component: MessageComponent },
  { path: '', redirectTo: '/chatroom', pathMatch: 'full' },
  { path: '**', redirectTo: '/chatroom'}
  // { path: 'message', loadChildren: '/message/message.module#MessageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
