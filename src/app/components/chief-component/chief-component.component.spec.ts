import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefComponentComponent } from './chief-component.component';

describe('ChiefComponentComponent', () => {
  let component: ChiefComponentComponent;
  let fixture: ComponentFixture<ChiefComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiefComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
