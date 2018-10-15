import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatListItemComponent } from './main-chat-list-item.component';

describe('MainChatListItemComponent', () => {
  let component: MainChatListItemComponent;
  let fixture: ComponentFixture<MainChatListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
