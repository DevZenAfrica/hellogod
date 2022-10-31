import { Component, OnInit } from '@angular/core';
import {HolybibleService} from '../../services/holybible.service';
import {ActivatedRoute} from '@angular/router';
import {FamilyBook} from '../../models/familyBook';
import {Book} from '../../models/book';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-holy-bible',
  templateUrl: './holy-bible.page.html',
  styleUrls: ['./holy-bible.page.scss'],
})
export class HolyBiblePage implements OnInit {

  currentSegment = 'books';

  familyBook: FamilyBook[] = [];
  books: Book[] = [];
  chaps: any[];
  verses: any;

  tabChap: number[];
  tabVerse: number[];

  currentIdFamilyBook = null;
  currentIdBook = null;
  currentIndexChaps = null;
  currentIndexVerser = null;

  selectionParam = '';

  isLoading = true;

  constructor(private holyBibleService: HolybibleService, private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.selectionParam = this.route.snapshot.queryParams.book ? (this.selectionParam = 'book') : (this.route.snapshot.queryParams.chap ? this.selectionParam = 'chap' : '');
    this.holyBibleService.getFamilyBook(this.storageService.getItem('language').toLowerCase()).then(
      (data0) => {
        this.isLoading = false;
        this.familyBook = data0;
        const pointe = this;
        this.books = [];
        this.familyBook.forEach(function(doc) {
          pointe.getBook(doc.id);
        });
      }
    );
  }

  getBook(idFamilyBook) {
    this.isLoading = true;
    this.currentIdFamilyBook = idFamilyBook;
    this.holyBibleService.getBooks(idFamilyBook, this.storageService.getItem('language').toLowerCase()).then(
      (data) => {
        const pointe = this;
        data.forEach(function(doc) {
          pointe.books.push(doc);
        });
        this.isLoading = false;
      }
    );
  }

  getChaps(idBook: string) {
    this.isLoading = true;
    this.currentIdBook = idBook;
    this.chaps = null;
    this.currentSegment = 'chapters';
    this.holyBibleService.getChapsWitchBook(idBook, this.storageService.getItem('language').toLowerCase()).then(
      (data) => {
        this.chaps = data;
        this.tabChap = this.sendTableauNumber(this.recupLastNumberChap(this.chaps));
        this.isLoading = false;
      }
    );
  }

  sendTableauNumber(max) {
    const result = [];
    for(let i=1; i<= max; i++) {
      result.push(i);
    }
    return result;
  }

  recupLastNumberChap(tab) {
    return tab.length > 0 ? (tab.pop() as any).chapter : 0;
  }

  recupLastNumberVerser(tab) {
    return tab.length > 0 ? (tab.pop() as any).verse : 0;
  }

  getVerser(idBook, chap = 0) {
    this.isLoading = true;
    this.currentIndexChaps = chap;
    this.verses = null;
    this.currentSegment = 'verses';
    this.holyBibleService.getVersersWitchBookAndChap(idBook, chap, this.storageService.getItem('language').toLowerCase()).then(
      (data) => {
        this.verses = data;
        this.tabVerse = this.sendTableauNumber(this.recupLastNumberVerser(this.verses));
        this.isLoading = false;
      }
    );
  }

  openLink(url) {
    window.open(url,'_self');
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value;
  }

}
