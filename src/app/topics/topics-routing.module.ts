import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { TopicsListComponent } from './topics-list/topics-list.component';

const routes: Routes = [
  { path: '', component: TopicsListComponent },
  { path: 'create', component: CreateTopicComponent },
  { path: 'details/:id', component: CreateTopicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsRoutingModule {}
