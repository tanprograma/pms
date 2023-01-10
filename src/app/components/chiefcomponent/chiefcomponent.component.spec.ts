import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefcomponentComponent } from './chiefcomponent.component';

describe('ChiefcomponentComponent', () => {
  let component: ChiefcomponentComponent;
  let fixture: ComponentFixture<ChiefcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiefcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
