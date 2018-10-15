import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ChannelsService } from '../../services/channels.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  users = [];
  constructor(
    public us: UsersService,
    public channels: ChannelsService,
  ) {

  }

  ngOnInit() {
    this.us.getUsersList()
      .then( data => this.users = data.map( user =>
          Object.assign(user, {avatar: 'http://robohash.org/' + user.pseudo})
        ));
  }
}
