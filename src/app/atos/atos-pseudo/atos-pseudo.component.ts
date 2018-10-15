import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atos-pseudo',
  templateUrl: './atos-pseudo.component.html',
  styleUrls: ['./atos-pseudo.component.css']
})
export class AtosPseudoComponent implements OnInit {

  @Input() user = { pseudo: 'Anonymous'};
  @Input() infos = 'Infos';

  constructor() { }

  ngOnInit() {
  }

}
