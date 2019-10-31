import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivoperationComponent } from './divoperation.component';

describe('DivoperationComponent', () => {
  let component: DivoperationComponent;
  let fixture: ComponentFixture<DivoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
