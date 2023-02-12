import { TestBed } from '@angular/core/testing'

import { WeatherForcastService } from './weather-forcast.service'

describe('WeatherForcastService', () => {
  let service: WeatherForcastService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(WeatherForcastService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
