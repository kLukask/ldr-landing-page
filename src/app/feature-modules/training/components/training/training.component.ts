import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSchedule } from '../../interfaces/training-schedule.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
  trainingSchedule: TrainingSchedule[] = [];
  displayedColumns: string[];

  constructor() {
    this.trainingSchedule = [
      {
        day: 'Monday',
        date: '4th April',
        location: 'Yarborough Leisure Centre',
        postcode: 'LN1 3SP',
        notes: 'Meet at 6:30pm for a 6:45pm start',
      },
    ];

    this.displayedColumns = ['day', 'date', 'location', 'postcode', 'notes'];
  }
}
