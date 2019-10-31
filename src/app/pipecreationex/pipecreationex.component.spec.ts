import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecreationexComponent } from './pipecreationex.component';

describe('PipecreationexComponent', () => {
  let component: PipecreationexComponent;
  let fixture: ComponentFixture<PipecreationexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipecreationexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipecreationexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
