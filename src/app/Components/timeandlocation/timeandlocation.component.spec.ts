import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeandlocationComponent } from './timeandlocation.component';

describe('TimeandlocationComponent', () => {
  let component: TimeandlocationComponent;
  let fixture: ComponentFixture<TimeandlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeandlocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeandlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
