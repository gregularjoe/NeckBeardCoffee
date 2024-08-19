import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidBarProductsComponent } from './mid-bar-products.component';

describe('MidBarProductsComponent', () => {
  let component: MidBarProductsComponent;
  let fixture: ComponentFixture<MidBarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidBarProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidBarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
