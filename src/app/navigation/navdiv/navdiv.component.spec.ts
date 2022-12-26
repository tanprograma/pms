import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdivComponent } from './navdiv.component';

describe('NavdivComponent', () => {
  let component: NavdivComponent;
  let fixture: ComponentFixture<NavdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
