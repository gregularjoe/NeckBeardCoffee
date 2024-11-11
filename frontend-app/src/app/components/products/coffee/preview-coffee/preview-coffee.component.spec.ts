import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCoffeeComponent } from './preview-coffee.component';

describe('PreviewCoffeeComponent', () => {
  let component: PreviewCoffeeComponent;
  let fixture: ComponentFixture<PreviewCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
