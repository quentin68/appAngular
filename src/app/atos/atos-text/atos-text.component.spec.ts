import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtosTextComponent } from './atos-text.component';

describe('AtosTextComponent', () => {
  let component: AtosTextComponent;
  let fixture: ComponentFixture<AtosTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtosTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtosTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
