import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcoperationComponent } from './calcoperation.component';

describe('CalcoperationComponent', () => {
  let component: CalcoperationComponent;
  let fixture: ComponentFixture<CalcoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
