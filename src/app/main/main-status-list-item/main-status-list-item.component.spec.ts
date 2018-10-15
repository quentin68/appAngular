import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusListItemComponent } from './main-status-list-item.component';

describe('MainStatusListItemComponent', () => {
  let component: MainStatusListItemComponent;
  let fixture: ComponentFixture<MainStatusListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
