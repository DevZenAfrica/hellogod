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
    const wrapper = document.createElement('div');
    wrapper.innerHTML= texte;
    return wrapper.getElementsByTagName(this.translate.currentLang).length > 0 ? wrapper.getElementsByTagName(this.translate.currentLang)[0].innerHTML : texte;
  }

}
