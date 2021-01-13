import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss'],
})
export class CreateTopicComponent implements AfterViewInit, OnInit {
  @ViewChild('subject', { static: true }) subject;
  editMode = true;
  data;
  topic: any = { tag: [], content: '' };
  constructor(
    private topicService: TopicsService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      if (!res.id) {
        return;
      }
      this.topicService.getTopicById(res.id).subscribe((items) => {
        this.topic = items && items.length ? items[0] : {};
        this.editMode = false;
      });
    });
  }

  ngAfterViewInit() {
    fromEvent(this.subject.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((eve: any) => {
          this.data = [];
          return eve.target.value;
        }),
        filter(Boolean),
        distinctUntilChanged(),
        switchMap((val: any) => {
          return this.topicService.getTopics(val, '');
        })
      )
      .subscribe((res) => (this.data = res));
  }
  addTag(event) {
    if (!event.target.value) {
      return;
    }

    this.topic.tag.push({
      name: event.target.value,
      permalink: event.target.value,
    });
    event.target.value = '';
  }
}
