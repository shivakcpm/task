import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { TagComponent } from './tag/tag.component';



@NgModule({
  declarations: [TopicsListComponent, TopicCardComponent, TagComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
