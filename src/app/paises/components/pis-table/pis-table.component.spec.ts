import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisTableComponent } from './pis-table.component';

describe('PisTableComponent', () => {
  let component: PisTableComponent;
  let fixture: ComponentFixture<PisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
