import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {UtilisateurService} from '../../services/utilisateur.service';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-print-top-article',
  templateUrl: './print-top-article.component.html',
  styleUrls: ['./print-top-article.component.scss'],
})
export class PrintTopArticleComponent implements OnInit {

  articlesTop: Article[] = [];
  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 1.05,
    spaceBetween: 2,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pager: true,
    scrollbar: true,
    autoplay:true
  };

  constructor(private articleService: ArticleService, private userService: UtilisateurService, private authService: AuthentificationService) { }

  ngOnInit() {
    const pointe = this;
    this.articleService.getTopArticles().then(
      (data) => {
        this.authService.isAuthenticated().then(
          (result) => {
            if(result) {
              this.userService.getCurrentUtilisateur().then(
                (data1) => {
                  const tmpA = this.trieTableau(data);
                  tmpA.forEach(function(doc) {
                    if(!data1.idCountry || doc.idCountry.length === 0 || doc.idCountry.includes(data1.idCountry)) {
                      pointe.articlesTop.push(doc as Article);
                    }
                  });
                }
              );
            } else {
              this.articlesTop = this.trieTableau(data);
            }
          }
        );
      }
    );
  }

  trieTableau(tableau: any[]) {
    return tableau.sort((a, b) => a.date - b.date).reverse();
  }

}
