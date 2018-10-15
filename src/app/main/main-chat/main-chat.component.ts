import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css'],
})
export class MainChatComponent {

  @Output() newMessage = new EventEmitter();

  constructor(private route: ActivatedRoute) {
    route.params.subscribe( params => console.warn(params));
   }

  onNewMessage( msg ) {
    this.newMessage.emit(msg);
  }


}
