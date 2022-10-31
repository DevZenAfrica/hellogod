import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HolybibleService} from "../services/holybible.service";
import {TextToSpeechService} from "../services/text-to-speech.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-preview-holy-bible',
  templateUrl: './preview-holy-bible.page.html',
  styleUrls: ['./preview-holy-bible.page.scss'],
})
export class PreviewHolyBiblePage implements OnInit {

  familyBook;
  book;
  chap;
  verse;
  contenu;
  language = 'en';
  lastIndexVerse = 0;
  isLoading = true;
  isLoadingAudio = false;
  indexPlay = 0;
  dataTextPlay;

  constructor(private route: ActivatedRoute, private holyBibleService: HolybibleService, private textToSpeechService: TextToSpeechService, private storageService: StorageService) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.familyBook) { this.familyBook = this.route.snapshot.queryParams.familyBook; }
    if(this.route.snapshot.queryParams.book) { this.book = this.route.snapshot.queryParams.book; }
    if(this.route.snapshot.queryParams.chap) { this.chap = this.route.snapshot.queryParams.chap; }
    if(this.route.snapshot.queryParams.verse) { this.verse = this.route.snapshot.queryParams.verse; }

    if(this.familyBook && this.book && this.chap) {
      this.holyBibleService.getVersersWitchBookAndChap(this.book, this.chap, this.storageService.getItem('language').toLowerCase()).then(
        (data) => {
          const pointe = this;
          this.contenu = data;
          this.lastIndexVerse = this.sendTableauNumber(this.recupLastNumberVerser(this.contenu)).length;
          if(this.verse) { this.indexPlay = Number(this.verse) -1; setTimeout(function(){ pointe.scrollToElement('verse_' + pointe.verse.toString()); }, 1000); }
          this.isLoading = false;
        }
      );
    }
  }

  playText() {
    this.isLoadingAudio = true;
    this.textToSpeechService.getSoundPost(this.contenu[this.indexPlay].text.toString(), this.storageService.getItem('language').toLowerCase()).then(
      (data: any) => {
        this.dataTextPlay = data.result.audio_url;
        this.isLoadingAudio = false;
      }
    );
  }

  autoPlayVerse() {
    if(this.indexPlay < this.contenu.length -1) {
      this.indexPlay += 1;
      this.scrollToElement('verse_' + (this.indexPlay + 1 ).toString());
      this.playText();
    } else {
      this.dataTextPlay = '';
    }
  }

  updateIndexPlay(index) {
    this.dataTextPlay = null;
    this.indexPlay = index;
  }

  sendTableauNumber(max) {
    const result = [];
    for(let i=0; i<max; i++) {
      result.push(i);
    }
    return result;
  }

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  recupLastNumberVerser(tab) {
    return tab.length > 0 ? (tab.pop() as any).verse : 0;
  }

}
