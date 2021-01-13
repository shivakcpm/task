import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { TopicsRoutingModule } from './topics-routing.module';


@NgModule({
  declarations: [TopicsListComponent, TopicCardComponent],
  imports: [CommonModule, TopicsRoutingModule, HttpClientModule],
})
export class TopicsModule {}
