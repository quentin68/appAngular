import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { MainChatListComponent } from './main-chat-list/main-chat-list.component';
import { MainChatListItemComponent } from './main-chat-list-item/main-chat-list-item.component';
import { MainEditComponent } from './main-edit/main-edit.component';
import { MainStatusComponent } from './main-status/main-status.component';
import { MainStatusListComponent } from './main-status-list/main-status-list.component';
import { MainStatusListItemComponent } from './main-status-list-item/main-status-list-item.component';
import { AtosModule } from '../atos/atos.module';

@NgModule({
  imports: [
    CommonModule,
    AtosModule,
  ],
  declarations: [MainComponent, MainHeaderComponent, MainChatComponent, MainChatListComponent, MainChatListItemComponent, MainEditComponent, MainStatusComponent, MainStatusListComponent, MainStatusListItemComponent],
  exports: [MainComponent]
})
export class MainModule { }
