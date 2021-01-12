import { Component, OnInit } from '@angular/core';
import * as topicsData from '../../../assets/topics.json';
@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})

// TODO: Use service to fetch topics
export class TopicsListComponent implements OnInit {
  topics = topicsData.data;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.topics);
  }

}
