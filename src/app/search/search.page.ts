import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  currentSearch: string;
  articles: Article[] = [];
  listAllArticle: Article[] = [];

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private articleService: ArticleService) { }

  ngOnInit() {
    this.currentSearch = this.activatedRoute.snapshot.paramMap.get('texte');
    this.reloadSearch();
  }

  reloadSearch() {
    if(this.currentSearch) {
      this.articleService.getAllArticles().then(
        (data) => {
          this.listAllArticle = data;

          const pointe = this;
          this.articles = [];
          let tmpArticle: Article[] = [];
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          this.listAllArticle.forEach(function(doc) {
            if(pointe.filtreSearchFromTexte(pointe.currentSearch, doc)) {
              tmpArticle.push(doc);
              tmpArticle = pointe.trieTableau(tmpArticle);
            }
          });

          this.articles = tmpArticle;
        }
      );
    }
  }

  trieTableau(tableau: Article[]) {
    const tmpValue = tableau.sort((a, b) => this.convertStringDateToNumber(a.date) - this.convertStringDateToNumber(b.date));
    return tmpValue.reverse();
  }

  filtreSearchFromTexte(currentSearch: string, doc: Article) {
    return doc.title.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1 || doc.content.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1 || doc.tags.toString().toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1 || doc.description.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1;
  }

  convertStringDateToNumber(date: string) {
    return Number(date.replace(/-/g, ''));
  }

  backToPreview() {
    this.navCtrl.back();
  }

}
