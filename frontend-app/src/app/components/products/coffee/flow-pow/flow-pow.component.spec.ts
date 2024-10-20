import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowPowComponent } from './flow-pow.component';

describe('FlowPowComponent', () => {
  let component: FlowPowComponent;
  let fixture: ComponentFixture<FlowPowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowPowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowPowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
