import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {

  @Input() currentUser = {
    avatar: 'http://placehold.it/80',
    pseudo: 'Bill',
    status: true
  };

  ngOnInit() { }

}
