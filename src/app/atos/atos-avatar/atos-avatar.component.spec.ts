import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtosAvatarComponent } from './atos-avatar.component';

describe('AtosAvatarComponent', () => {
  let component: AtosAvatarComponent;
  let fixture: ComponentFixture<AtosAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtosAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtosAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
