import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtosPseudoComponent } from './atos-pseudo.component';

describe('AtosPseudoComponent', () => {
  let component: AtosPseudoComponent;
  let fixture: ComponentFixture<AtosPseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtosPseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtosPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
