import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {ApiService} from './api.service';
import {FamilyBook} from '../models/familyBook';

@Injectable({
  providedIn: 'root'
})
export class HolybibleService {

  constructor(private apiService: ApiService) { }

  getFamilyBook(language) {
    return new Promise<FamilyBook[]>((resolve, reject) => {
      if(language === 'fr') {
        resolve([new FamilyBook('ancienTestament', 'Ancien Testament')]);
      } else {
        resolve([new FamilyBook('oldTestament', 'Old Testament')]);
      }
      //resolve([new FamilyBook('<fr>ancienTestament</fr><en>oldTestament</en>', '<fr>Ancien Testament</fr><en>Old Testament</en>'), new FamilyBook('<fr>nouveauTestament</fr><en>newTestament</en>', '<fr>Nouveau Testament</fr><en>New Testament</en>')]);
    });
  }

  getBooks(idFamilyBook, language) {
    return new Promise<Book[]>((resolve, reject) => {
      const result: Book[] = [];
      if(language === 'fr') {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/epee/bible/french/allbooknames', 'json').then(
          (docRef1) => {
            (docRef1 as unknown as any[]).forEach(function(doc, index) {
              result.push(new Book(doc, doc, idFamilyBook));
            });
            resolve(result);
          }
        );
      } else {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/kingjames/bible/english/allbooknames', 'json').then(
          (docRef) => {
            (docRef as unknown as any[]).forEach(function(doc, index) {
              result.push(new Book(doc, doc, idFamilyBook));
            });
            resolve(result);
          }
        );
      }
    });
  }

  getChapsWitchBook(book: string, language) {
    return new Promise<any[]>((resolve, reject) => {
      const result: any[] = [];
      if(language === 'fr') {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/epee/bible/french/bookname?bookName=' + book, 'json').then(
          (docRef) => {
            (docRef as unknown as any[]).forEach(function(doc, index) {
              result.push(doc);
            });
            resolve(result);
          }
        );
      } else {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/kingjames/bible/english/bookname?bookName=' + book, 'json').then(
          (docRef) => {
            (docRef as unknown as any[]).forEach(function(doc, index) {
              result.push(doc);
            });
            resolve(result);
          }
        );
      }
    });
  }


  getVersersWitchBookAndChap(idBook, indexChap, language) {
    return new Promise<any[]>((resolve, reject) => {
      const result: any[] = [];
      if(language === 'fr') {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/epee/bible/french/bookname/chapter?bookName=' + idBook + '&chapter=' + indexChap, 'json').then(
          (docRef) => {
            (docRef as unknown as any[]).forEach(function(doc, index) {
              result.push(doc);
            });
            resolve(result);
          }
        );
      } else {
        this.apiService.getDataWitchApi('https://multilingual-bible.p.rapidapi.com/kingjames/bible/english/bookname/chapter?bookName=' + idBook + '&chapter=' + indexChap, 'json').then(
          (docRef) => {
            (docRef as unknown as any[]).forEach(function(doc, index) {
              result.push(doc);
            });
            resolve(result);
          }
        );
      }
    });
  }

}
