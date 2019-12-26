import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.css']
})
export class ChatroomListComponent implements OnInit {

  messages = [
    {
      from: "Nicoy",
      time: "09:00",
      content: "Yooooww waa gwaan",
      mcount: 3
    },
    {
      from: "David",
      time: "13:00",
      content: "What's the pree?",
      mcount: 15
    },
    {
      from: "Keneth",
      time: "07:00",
      content: "On my way to the lab",
      mcount: 18
    },
    {
      from: "Ottor",
      time: "10:00",
      content: "At Lab",
      mcount: 12,
    },
    {
      from: "Thomas",
      time: "12:30",
      content: "The assignment is due on Wednesday",
      mcount: 51
    },
    {
      from: "Tong",
      time: "2:41",
      content: "The football match is at 3:30",
      mcount: 1
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
