import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserComponent } from './updateuser.component';

describe('UpdateuserComponent', () => {
  let component: UpdateuserComponent;
  let fixture: ComponentFixture<UpdateuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateuserComponent]
    });
    fixture = TestBed.createComponent(UpdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
