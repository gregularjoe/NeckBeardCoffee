import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCoffeeComponent } from './java-coffee.component';

describe('JavaCoffeeComponent', () => {
  let component: JavaCoffeeComponent;
  let fixture: ComponentFixture<JavaCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
