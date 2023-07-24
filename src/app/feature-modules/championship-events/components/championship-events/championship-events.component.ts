import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChampEvents } from '../../interfaces/champ-events.interface';
import { ChampStandings } from '../../interfaces/champ-standings.interface';

@Component({
  selector: 'app-championship-events',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule],
  templateUrl: './championship-events.component.html',
  styleUrls: ['./championship-events.component.scss'],
})
export class ChampionshipEventsComponent implements OnInit {
  championshipRules: string[];
  // Champ events
  championshipEvents: MatTableDataSource<ChampEvents>;
  champEventsColumns: string[];
  // Champ standings
  champStandingsMen: MatTableDataSource<ChampStandings>;
  champStandingsLadies: MatTableDataSource<ChampStandings>;
  champStandingsColumns: string[];
  champDataMen: ChampStandings[];
  champDataLadies: ChampStandings[];

  constructor() {
    this.championshipRules = this.getChampionshipRules();
    // Champ events
    this.championshipEvents = new MatTableDataSource(
      this.getChampionshipEvents()
    );
    this.champEventsColumns = ['position', 'event', 'event_date'];
    // Champ standings
    this.champDataMen = this.getMenStandings();
    this.champDataLadies = this.getLadiesStandings();
    this.champStandingsMen = new MatTableDataSource(this.champDataMen);
    this.champStandingsLadies = new MatTableDataSource(this.champDataLadies);

    this.champStandingsColumns = ['name', 'points'];
  }

  ngOnInit(): void {
    // Filter champ standings by default year when page is loaded
    this.champStandingsMen = new MatTableDataSource(
      this.champDataMen.filter((row) => row.year === 2021)
    );

    this.champStandingsLadies = new MatTableDataSource(
      this.champDataLadies.filter((row) => row.year === 2021)
    );
  }

  menTabChanged(tabEvent: MatTabChangeEvent): void {
    // Get tab label
    const tabLabel = tabEvent.tab.textLabel;
    // Filter champ standings by year
    this.champStandingsMen = new MatTableDataSource(
      this.champDataMen.filter((row) => row.year === Number(tabLabel))
    );
  }
  /**
   * Filter data source when tab is changed
   */
  ladiesTabChanged(tabEvent: MatTabChangeEvent): void {
    // Get tab label
    const tabLabel = tabEvent.tab.textLabel;
    // Filter champ standings by year
    this.champStandingsLadies = new MatTableDataSource(
      this.champDataLadies.filter((row) => row.year === Number(tabLabel))
    );
  }

  getChampionshipRules(): string[] {
    return [
      'Only 1 entry per event.',
      '10 points are allocated to the fastest time, descending to 1 point for 10th place.',
      'There is a seperate competition for men and ladies.',
      'Best 10 Events will count towards the club championships.',
      'In the event of a tie, most 1st places, 2nd places etc.will be used to determine the positions.',
      'For the LWAC 5K series, 5 bonus points are awarded for completing all events in the series.',
      'For the Lincs XC events, 5 bonus points are awarded for completing all events in the series.',
      'For the club hosted Skellingthorpe 10K event, 5 points will be given to anyone volunteering on the night.',
      'Any marathon run in the year - 10 points down to 1 point for the fastest time.',
      'ParkRun - fastest time of any run in 2023.',
      'ParkRun - 2 points for every ParkRun you attend or volunteer(up to a maximum 10 points).',
    ];
  }

  getChampionshipEvents(): ChampEvents[] {
    return [
      {
        event: 'Lincoln 10K',
        event_link: 'https://www.runforall.com/events/10k/city-of-lincoln-10k/',
        event_date: '24 April 2023',
      },
      {
        event: 'Lincoln half marathon',
        event_link: 'https://lincolncityhalfmarathon.co.uk/',
        event_date: 'Postponed - TBC',
      },
    ];
  }

  getMenStandings(): ChampStandings[] {
    return [
      {
        name: 'John Doe',
        points: 22,
        year: 2023,
      },
      {
        name: 'John Doe 2022',
        points: 19,
        year: 2022,
      },
      {
        name: 'John Doe 2021',
        points: 49,
        year: 2021,
      },
    ];
  }

  getLadiesStandings(): ChampStandings[] {
    return [
      {
        name: 'Jane Doe',
        points: 22,
        year: 2023,
      },
      {
        name: 'Jane Doe 2022',
        points: 88,
        year: 2022,
      },
      {
        name: 'Jane Doe 2021',
        points: 92,
        year: 2021,
      },
    ];
  }
}
