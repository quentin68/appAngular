import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-chat-list-item',
  templateUrl: './main-chat-list-item.component.html',
  styleUrls: ['./main-chat-list-item.component.css']
})
export class MainChatListItemComponent implements OnInit {

  @Input() message = {
    id: 0,
    text: `Default`,
    date: Date.now(),
    user: {
      id: 0,
      avatar: 'http://placehold.it/80',
      pseudo: 'Default',
      status: false
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
