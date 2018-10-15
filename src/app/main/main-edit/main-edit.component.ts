import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-edit',
  templateUrl: './main-edit.component.html',
  styleUrls: ['./main-edit.component.css']
})
export class MainEditComponent  {

  userInput = '';
  @Output() newMessage = new EventEmitter();

  sendMessage() {
    this.newMessage.emit(this.userInput) ;
  }

}
