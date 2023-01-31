import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWiseInfoComponent } from './map-wise-info.component';

describe('MapWiseInfoComponent', () => {
  let component: MapWiseInfoComponent;
  let fixture: ComponentFixture<MapWiseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapWiseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapWiseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
