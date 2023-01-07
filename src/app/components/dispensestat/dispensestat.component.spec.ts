import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensestatComponent } from './dispensestat.component';

describe('DispensestatComponent', () => {
  let component: DispensestatComponent;
  let fixture: ComponentFixture<DispensestatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensestatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
