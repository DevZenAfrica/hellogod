import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: Article[] = [];
  currentSegment = 'upcomming';
  isSearch = false;
  loadedListEvent: any[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles('event').then(
      (data) => {
        this.events = data;
        this.loadedListEvent = this.events;
      }
    );
  }

  isEventPass(dateCompare: string): boolean {
    if (new Date() > new Date(dateCompare)) {
      return true;
    } else {
      return false;
    }
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }

  /* Recherche transaction */
  initializeItemsAll(): void {
    this.events = this.loadedListEvent;
  }

  filterListTransaction(evt) {
    this.initializeItemsAll();

    const searchTerm = evt.detail.target.value;

    if (!searchTerm) {
      this.loadedListEvent = this.events;
      return;
    }

    this.events = this.events.filter(current => {
      if (current.title && current.description && current.content && searchTerm){
        if (current.title.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || current.description.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || current.content.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }

    });
  }
  /* Fin recherche */

}
