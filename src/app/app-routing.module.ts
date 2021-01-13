import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'forum', pathMatch:'prefix', },
  {
    path: 'forum',
    loadChildren: () =>
      import('./topics/topics.module').then((m) => m.TopicsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
