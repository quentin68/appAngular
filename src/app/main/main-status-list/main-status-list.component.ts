import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-status-list',
  templateUrl: './main-status-list.component.html',
  styleUrls: ['./main-status-list.component.css']
})
export class MainStatusListComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
