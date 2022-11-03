import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-miniature-article',
  templateUrl: './miniature-article.component.html',
  styleUrls: ['./miniature-article.component.scss'],
})
export class MiniatureArticleComponent implements OnInit {

  @Input() idArticle;
  @Input() skin = 'card';
  @Input() data: Article;

  constructor(private articleService: ArticleService, private translate: TranslateService) { }

  ngOnInit() {
    if(!this.data && this.idArticle) {
      this.articleService.getArticleWitchId(this.idArticle).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

  getValueTraduct(texte: string) {
    let result; let result2;
    const result1 = texte.split(this.translate.currentLang + '>');
    if(result1.length > 1) { result2 = result1[1].split('</' + this.translate.currentLang + '>'); }
    if(result1.length > 1 && result2.length > 0) { result = result2[0]; }
    return result ? result : texte;
  }

}
