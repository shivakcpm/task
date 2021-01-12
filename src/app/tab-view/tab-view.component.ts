import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Tab{
  label:string,
  value:string
}

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent {
  @Input()
  tabs:Tab[];
  @Input('defaultTab')
  selectedTab;
  @Output() onTabChange = new EventEmitter();
  constructor() { }
  selectTab(value){
    this.selectedTab = value;
    this.onTabChange.emit(this.selectedTab);
  }




}
