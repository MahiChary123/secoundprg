import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuboperationComponent } from './suboperation.component';

describe('SuboperationComponent', () => {
  let component: SuboperationComponent;
  let fixture: ComponentFixture<SuboperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuboperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuboperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
