import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutParameterComponent } from './rout-parameter.component';

describe('RoutParameterComponent', () => {
  let component: RoutParameterComponent;
  let fixture: ComponentFixture<RoutParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
