import { Component, OnInit, ViewChild } from '@angular/core';
import { ChannelsService } from '../../services/channels.service';
import { UsersService } from '../../services/users.service';
import { MessagesService } from '../../services/messages.service';
import { DemoService } from '../../services/demo.service';
import { MainChatComponent } from '../main-chat/main-chat.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {

  @ViewChild(MainChatComponent) chat: MainChatComponent;

  constructor(
    public users: UsersService,
    public channels: ChannelsService,
    public messager: MessagesService
  ) {

  }

  ngOnInit() {
    this.chat.newMessage.subscribe( data => console.log(data ));
  }

}
