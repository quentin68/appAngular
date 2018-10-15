import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-main-chat-list",
  templateUrl: "./main-chat-list.component.html",
  styleUrls: ["./main-chat-list.component.css"]
})
export class MainChatListComponent implements OnInit {
  @Input()
  messagesList = [
    {
      id: 1,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eius nesciunt a corrupti facilis magnam laudantium libero ex ab ullam
      distinctio pariatur, ducimus sunt assumenda. Dolores iusto nostrum inventore ratione numquam!`,
      date: Date.now(),
      user: {
        id: 3,
        avatar: "http://placehold.it/80",
        pseudo: "User 3",
        status: true
      }
    },
    {
      id: 2,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eius nesciunt a corrupti facilis magnam laudantium libero ex ab ullam
      distinctio pariatur, ducimus sunt assumenda. Dolores iusto nostrum inventore ratione numquam!`,      date: Date.now(),
      user: {
        id: 4,
        avatar: "http://placehold.it/80",
        pseudo: "User 4",
        status: true
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
