import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  animations: [
    // Animation to open and close the faq list
    trigger('toggleList', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          margin: '1rem 0',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
})
export class JoinComponent {
  clubFaqs = [
    {
      question: 'How do I join Lincoln & District Runners?',
      answer: `Thank you for your interest in joining the club. The first step is to
          come along to one of our club runs and see if you like it. The club
          offers a free trial session for you to get a taste of what we offer.`,
      active: false,
    },
    {
      question: 'Do I need previous running experience?',
      answer: 'No, we welcome runners of all abilities.',
      active: false,
    },
  ];
}
