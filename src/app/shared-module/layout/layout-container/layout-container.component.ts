import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {}
