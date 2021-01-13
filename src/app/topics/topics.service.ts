import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private httpClient: HttpClient) {}

  getTopics(query,selectedTag) {
    return this.httpClient.get('../../assets/topics.json').pipe(
      map((res: any) => {
      return res.data.filter(item => new RegExp(query, 'i').test(item.subject) && (!selectedTag || item.tag?.some(tag => new RegExp(selectedTag, 'i').test(tag.permalink))))}))
      
  }

  getTopicById(id){
    return this.httpClient.get('../../assets/topics.json').pipe(
      map((res: any) => {
      return res.data.filter(item => item.id === id)
      }));
      
  }
}
