import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuloperationComponent } from './muloperation.component';

describe('MuloperationComponent', () => {
  let component: MuloperationComponent;
  let fixture: ComponentFixture<MuloperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuloperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuloperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
