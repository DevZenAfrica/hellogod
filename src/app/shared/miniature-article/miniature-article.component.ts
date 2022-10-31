import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-miniature-article',
  templateUrl: './miniature-article.component.html',
  styleUrls: ['./miniature-article.component.scss'],
})
export class MiniatureArticleComponent implements OnInit {

  @Input() idArticle;
  @Input() skin = 'card';
  @Input() data: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    if(!this.data && this.idArticle) {
      this.articleService.getArticleWitchId(this.idArticle).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

}
