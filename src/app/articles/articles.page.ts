import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: Article[] = [];
  isSearch = false;
  loadedListArticle: any[];
  titlePage = '';
  isLoading = true;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titlePage = this.activatedRoute.snapshot.paramMap.get('id').replace('-', ' ');
    this.articleService.getArticles(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.articles = data;
        this.loadedListArticle = this.articles;
        this.isLoading = false;
      }
    );
  }

  /* Recherche transaction */
  initializeItemsAll(): void {
    this.articles = this.loadedListArticle;
  }

  filterListTransaction(evt) {
    this.initializeItemsAll();

    const searchTerm = evt.detail.target.value;

    if (!searchTerm) {
      this.loadedListArticle = this.articles;
      return;
    }

    this.articles = this.articles.filter(current => {
      if (current.title && current.content && searchTerm){
        if (current.title.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || current.content.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
  /* Fin recherche */

}
