import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSchedule } from '../../interfaces/training-schedule.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
  trainingSchedule: MatTableDataSource<TrainingSchedule>;
  displayedColumns: string[];
  columns: { columnDef: string; header: string; cell: any }[];
  currentDate: Date;
  futureDate: Date;

  constructor() {
    this.trainingSchedule = new MatTableDataSource(this.createDummyData());
    this.currentDate = new Date();
    this.futureDate = new Date();
    this.futureDate.setFullYear(this.currentDate.getFullYear() + 1);

    this.columns = [
      {
        columnDef: 'day',
        header: 'Day',
        cell: (element: TrainingSchedule) => `${element.day}`,
      },
      {
        columnDef: 'date',
        header: 'Date',
        cell: (element: TrainingSchedule) => `${element.date}`,
      },
      {
        columnDef: 'location',
        header: 'Location',
        cell: (element: TrainingSchedule) => `${element.location}`,
      },
      {
        columnDef: 'postcode',
        header: 'Postcode',
        cell: (element: TrainingSchedule) => `${element.postcode}`,
      },
      {
        columnDef: 'notes',
        header: 'Notes',
        cell: (element: TrainingSchedule) => `${element.notes}`,
      },
    ];

    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  searchTable(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.trainingSchedule.filter = filterValue.trim().toLowerCase();
  }

  // Create dummy data for the table
  createDummyData(): TrainingSchedule[] {
    const dummyData = [];
    for (let i = 0; i < 5; i++) {
      dummyData.push({
        day: 'Tuesday',
        date: '25th July',
        location: 'Running location',
        postcode: 'Running postcode',
        notes: 'Running notes',
      });
    }

    for (let i = 0; i < 5; i++) {
      dummyData.push({
        day: 'Thursday',
        date: '28th July',
        location: 'Running location',
        postcode: 'Running postcode',
        notes: 'Running notes',
      });
    }

    return dummyData;
  }
}
