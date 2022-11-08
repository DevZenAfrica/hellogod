import { Component, OnInit } from '@angular/core';
import {Comment} from '../models/comment';
import {Utilisateur} from '../models/utilisateur';
import {AlertService} from '../services/alert.service';
import {UtilisateurService} from '../services/utilisateur.service';
import {AuthentificationService} from '../services/authentification.service';
import {CommentService} from '../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {ApiService} from "../services/api.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.page.html',
  styleUrls: ['./preview-article.page.scss'],
})
export class PreviewArticlePage implements OnInit {

  currentArticle: Article;
  linkj: any;
  isComment = false;
  writeComment = '';
  scrollComment = false;
  currentComment: Comment[] = [];
  currentUser: Utilisateur = null;
  isLoading = false;

  constructor(private translate: TranslateService, private apiService: ApiService, private alertService: AlertService, private userService: UtilisateurService, private authService: AuthentificationService, private commentService: CommentService, private articleService: ArticleService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id').split('?').length > 1) { this.scrollComment = true; }
    this.articleService.getArticleWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentArticle = data;
        if(this.currentArticle.content.includes('p>http://') || this.currentArticle.content.includes('p>https://')) {
          this.apiService.getDataWitchApi(this.deleteBaliseParam('p', this.getValueTraduct( data.content))).then(
            (result) => {
              const tmpLinkj: any = result;
              this.linkj = tmpLinkj.replace('skin', 'src=');
            }
          );
        }
      }
    );

    this.commentService.getComments(this.scrollComment ? this.activatedRoute.snapshot.paramMap.get('id').split('?')[0] : this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data2) => {
        this.currentComment = data2;
        if(this.scrollComment) { this.scrollToElement('liste_comment'); }
      }
    );

    this.authService.isAuthenticated().then(
      (result) => {
        if(result) {
          this.userService.getCurrentUtilisateur().then(
            (data3) => {
              this.currentUser = data3;
            }
          );
        }
      }
    );
  }

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  sendComment(idParent: string) {
    if(this.writeComment) {
      const tmpComment = new Comment(this.currentArticle.id, this.currentUser.id, idParent, this.writeComment);
      this.commentService.addNewComment(tmpComment).then(
        () => {
          this.currentComment.unshift(tmpComment);
          this.writeComment = '';
          this.isComment = false;
          this.scrollToElement('title_comment');
        }
      );
    }
  }

  like() {
    this.articleService.likeArticle(this.currentArticle).then(
      () => {
        if(this.currentArticle.likes.includes(this.currentUser.id))
        {this.currentArticle.likes.splice(this.currentArticle.likes.indexOf(this.currentUser.id), 1);}
        else
        {
          if(this.currentArticle.disLikes.includes(this.currentUser.id)) {
            this.dislike();
          }
          this.currentArticle.likes.push(this.currentUser.id);
        }
      }
    );
  }

  dislike() {
    this.articleService.disLikeArticle(this.currentArticle).then(
      () => {
        if(this.currentArticle.disLikes.includes(this.currentUser.id))
        {this.currentArticle.disLikes.splice(this.currentArticle.disLikes.indexOf(this.currentUser.id), 1);}
        else
        {
          if(this.currentArticle.likes.includes(this.currentUser.id)) {
            this.like();
          }
          this.currentArticle.disLikes.push(this.currentUser.id);
        }
      }
    );
  }

  deleteBaliseParam(tag, texte) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML= texte;
    return wrapper.getElementsByTagName(tag).length > 0 ? wrapper.getElementsByTagName(tag)[0].innerHTML : texte;
  }

  getValueTraduct(texte: string) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML= texte;
    return wrapper.getElementsByTagName(this.translate.currentLang).length > 0 ? wrapper.getElementsByTagName(this.translate.currentLang)[0].innerHTML : texte;
  }

  archiveCurrentArticle() {
    const tmpCurrentUser = this.currentUser;
    if(tmpCurrentUser.archives.includes(this.currentArticle.id)) {
      tmpCurrentUser.archives.splice(tmpCurrentUser.archives.indexOf(this.currentArticle.id), 1);
    } else {
      tmpCurrentUser.archives.push(this.currentArticle.id);
    }
    this.userService.updateCurrentUser(this.currentUser).then(
      () => {
        this.currentUser = tmpCurrentUser;
        this.alertService.print(tmpCurrentUser.archives.includes(this.currentArticle.id) ? 'Add with success' : 'Successful removal');
      }
    );
  }

}
