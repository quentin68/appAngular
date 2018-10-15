import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusListComponent } from './main-status-list.component';

describe('MainStatusListComponent', () => {
  let component: MainStatusListComponent;
  let fixture: ComponentFixture<MainStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
