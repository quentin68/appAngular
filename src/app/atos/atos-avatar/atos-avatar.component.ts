import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atos-avatar',
  templateUrl: './atos-avatar.component.html',
  styleUrls: ['./atos-avatar.component.css']
})
export class AtosAvatarComponent {

  @Input() image = 'http://placehold.it/50x50';

}
