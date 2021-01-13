import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
  @Input() topic;
  @Input() suggestionMode;
  constructor(private router: Router) {}

  navigateToDetails(id) {
    this.router.navigate(['details', id]);
  }
}
