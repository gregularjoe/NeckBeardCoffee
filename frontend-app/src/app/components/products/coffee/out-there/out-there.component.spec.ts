import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutThereComponent } from './out-there.component';

describe('OutThereComponent', () => {
  let component: OutThereComponent;
  let fixture: ComponentFixture<OutThereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutThereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
