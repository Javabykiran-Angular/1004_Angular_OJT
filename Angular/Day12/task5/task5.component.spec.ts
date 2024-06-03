import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5Component } from './task5.component';

describe('Task5Component', () => {
  let component: Task5Component;
  let fixture: ComponentFixture<Task5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task5Component]
    });
    fixture = TestBed.createComponent(Task5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
