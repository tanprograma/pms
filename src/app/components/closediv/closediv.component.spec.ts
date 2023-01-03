import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedivComponent } from './closediv.component';

describe('ClosedivComponent', () => {
  let component: ClosedivComponent;
  let fixture: ComponentFixture<ClosedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
