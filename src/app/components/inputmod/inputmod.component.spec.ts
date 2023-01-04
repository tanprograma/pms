import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmodComponent } from './inputmod.component';

describe('InputmodComponent', () => {
  let component: InputmodComponent;
  let fixture: ComponentFixture<InputmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
