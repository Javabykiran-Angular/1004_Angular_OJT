import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPipeComponent } from './inbuilt-pipe.component';

describe('InbuiltPipeComponent', () => {
  let component: InbuiltPipeComponent;
  let fixture: ComponentFixture<InbuiltPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuiltPipeComponent]
    });
    fixture = TestBed.createComponent(InbuiltPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
