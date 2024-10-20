import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhMyDaysComponent } from './oh-my-days.component';

describe('OhMyDaysComponent', () => {
  let component: OhMyDaysComponent;
  let fixture: ComponentFixture<OhMyDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OhMyDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhMyDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
