import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEmployeePageComponent } from './adding-employee-page.component';

describe('AddingEmployeePageComponent', () => {
  let component: AddingEmployeePageComponent;
  let fixture: ComponentFixture<AddingEmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingEmployeePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
