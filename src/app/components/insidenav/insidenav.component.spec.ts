import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidenavComponent } from './insidenav.component';

describe('InsidenavComponent', () => {
  let component: InsidenavComponent;
  let fixture: ComponentFixture<InsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
