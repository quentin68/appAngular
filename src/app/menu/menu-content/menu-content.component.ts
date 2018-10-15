import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit {

  @Input() usersList = [
    {
      id: 1,
      avatar: 'http://placehold.it/80',
      pseudo: 'User 1',
      status: true
    },
    {
      id: 2,
      avatar: 'http://placehold.it/80',
      pseudo: 'User 2',
      status: true
    },
    {
      id: 3,
      avatar: 'http://placehold.it/80',
      pseudo: 'User 3',
      status: true
    }
  ];

  @Input() channelsList = [
    {
      id: 1,
      name: 'Channel 1'
    },
    {
      id: 2,
      name: 'Channel 2'
    },
    {
      id: 3,
      name: 'Channel 3'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
