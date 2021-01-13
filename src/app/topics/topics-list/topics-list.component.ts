import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TopicsService } from '../topics.service';
@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
})

// TODO: Use service to fetch topics
export class TopicsListComponent implements OnInit {
  topics;
  query;
  selectedTag='';
  tags =  [{
    "name": "marketing",
    "permalink": "marketing"
}, {
    "name": "sales",
    "permalink": "sales"
}, {
    "name": "covid 19",
    "permalink": "covid-19"
}, {
    "name": "corona",
    "permalink": "corona"
}];

  constructor(
    private topicsService: TopicsService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.query = params.query;
      this.fetchTopics();
    });
  }
  selectTag(tag){
    this.selectedTag = tag;
    this.fetchTopics();
  }
  fetchTopics(){
    this.topicsService
    .getTopics(this.query,this.selectedTag)
    .subscribe((res: any) => {
      this.topics = res});
  }
  createTopic(){
    this.router.navigate(['forum','create']);
  }
}
