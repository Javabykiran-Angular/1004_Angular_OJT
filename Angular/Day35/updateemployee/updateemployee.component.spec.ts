import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeeComponent } from './updateemployee.component';

describe('UpdateemployeeComponent', () => {
  let component: UpdateemployeeComponent;
  let fixture: ComponentFixture<UpdateemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateemployeeComponent]
    });
    fixture = TestBed.createComponent(UpdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
