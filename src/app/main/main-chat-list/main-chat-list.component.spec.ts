import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatListComponent } from './main-chat-list.component';

describe('MainChatListComponent', () => {
  let component: MainChatListComponent;
  let fixture: ComponentFixture<MainChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
