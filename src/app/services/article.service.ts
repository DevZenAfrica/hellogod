import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getTopArticles() {
    return new Promise<Article[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').where('status', '==', 1).where('miniatureTop', '!=', '').onSnapshot(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getAllArticles() {
    return new Promise<Article[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticles(categorie: string) {
    return new Promise<Article[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').where('categorie', '==', categorie).where('status', '==', 1).orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticleWitchTag(tag: string) {
    return new Promise<Article[]>((resolve, reject) => {
      firebase.firestore().collection('articles').where('tags', 'array-contains', tag).get().then(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach(function(doc) {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticleWitchId(idArticle: string) {
    return new Promise<Article>((resolve, reject) => {
      firebase.firestore().collection('articles').doc(idArticle).get().then(
        (docRef) => {
          resolve(docRef.data() as Article);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async likeArticle(article: Article) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('articles').doc(article.id).update(
        {
          likes: article.likes.includes(localStorage.getItem('id')) ? firebase.firestore.FieldValue.arrayRemove(localStorage.getItem('id')) : firebase.firestore.FieldValue.arrayUnion(localStorage.getItem('id')),
          disLikes: firebase.firestore.FieldValue.arrayRemove(localStorage.getItem('id'))
        }
      ).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async disLikeArticle(article: Article) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('articles').doc(article.id).update(
        {
          disLikes: article.disLikes.includes(localStorage.getItem('id')) ? firebase.firestore.FieldValue.arrayRemove(localStorage.getItem('id')) : firebase.firestore.FieldValue.arrayUnion(localStorage.getItem('id')),
          likes: firebase.firestore.FieldValue.arrayRemove(localStorage.getItem('id'))
        }
      ).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
