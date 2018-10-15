import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtosIconButtonComponent } from './atos-icon-button.component';

describe('AtosIconButtonComponent', () => {
  let component: AtosIconButtonComponent;
  let fixture: ComponentFixture<AtosIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtosIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtosIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
