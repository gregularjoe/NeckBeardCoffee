import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCadetComponent } from './space-cadet.component';

describe('SpaceCadetComponent', () => {
  let component: SpaceCadetComponent;
  let fixture: ComponentFixture<SpaceCadetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCadetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
