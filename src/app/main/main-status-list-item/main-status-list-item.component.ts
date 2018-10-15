import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-status-list-item',
  templateUrl: './main-status-list-item.component.html',
  styleUrls: ['./main-status-list-item.component.css']
})
export class MainStatusListItemComponent implements OnInit {

  @Input() user: any = {};

  constructor() { }

  ngOnInit() {
  }

}
