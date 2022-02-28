import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPRoductComponent } from './add-product.component';

describe('AddPRoductComponent', () => {
  let component: AddPRoductComponent;
  let fixture: ComponentFixture<AddPRoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPRoductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPRoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
