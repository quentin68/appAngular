import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Input() currentUser = {
    avatar: 'http://placehold.it/80',
    pseudo: 'Bill',
    status: true
  };

  constructor() { }

  ngOnInit() {
  }

}
