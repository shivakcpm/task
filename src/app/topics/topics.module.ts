import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableDirective } from './contenteditable.directive';


@NgModule({
  declarations: [TopicsListComponent, TopicCardComponent, CreateTopicComponent, ContenteditableDirective],
  imports: [CommonModule, TopicsRoutingModule, HttpClientModule,FormsModule],
})
export class TopicsModule {}
