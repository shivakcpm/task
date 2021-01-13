import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task';
  tabs = [
    { label: 'Forum', value: 'forum' },
    { label: 'Pastebin', value: 'pastebin' },
    { label: 'Chat', value: 'chat' },
    { label: 'Community', value: 'community' },
    { label: 'Jobs', value: 'jobs' },
  ];
  selectedTab = this.tabs[0];
  constructor(private router: Router){

  }
  changeTab(tab){
    this.selectedTab = tab;
  }
  search(event){
    this.router.navigate([this.selectedTab.value],{queryParams:{query:event.target.value}})
  }
}
