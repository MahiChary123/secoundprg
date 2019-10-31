import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassandstylebindComponent } from './classandstylebind.component';

describe('ClassandstylebindComponent', () => {
  let component: ClassandstylebindComponent;
  let fixture: ComponentFixture<ClassandstylebindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassandstylebindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassandstylebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
