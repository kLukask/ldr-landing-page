import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipEventsComponent } from './championship-events.component';

describe('ChampionshipEventsComponent', () => {
  let component: ChampionshipEventsComponent;
  let fixture: ComponentFixture<ChampionshipEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChampionshipEventsComponent]
    });
    fixture = TestBed.createComponent(ChampionshipEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
