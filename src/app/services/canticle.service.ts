import { Injectable } from '@angular/core';
import {Canticle} from '../models/canticle';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CanticleService {

  constructor(private apiService: ApiService) { }

  async getAllCanticle() {
    return new Promise<Canticle[]>((resolve, reject) => {
      // @ts-ignore
      this.apiService.getDataWitchApi('https://firebasestorage.googleapis.com/v0/b/bible-plus.appspot.com/o/sousLesAilesDeLaFoi.json?alt=media&token=f2699fd2-a119-42e3-8af1-65070f03d666', 'json').then(
        (docRef) => {
          const result: Canticle[] = [];
          ((docRef as any).Songs).forEach(function(doc) {
            result.push(doc as any);
          });
          resolve(result);
        }
      );
    });
  }


  async getCanticlesArtist() {
    return new Promise<Canticle[]>((resolve, reject) => {
      this.apiService.getDataWitchApi('https://firebasestorage.googleapis.com/v0/b/bible-plus.appspot.com/o/sousLesAilesDeLaFoi.json?alt=media&token=f2699fd2-a119-42e3-8af1-65070f03d666', 'json').then(
        (docRef) => {
          const result: Canticle[] = [];
          const artistGet: string[] = [];
          ((docRef as any).Songs).forEach(function(doc) {
            if(!artistGet.includes(doc.Author)) {
              result.push(doc as any);
              artistGet.push(doc.Author);
            }
          });
          resolve(result);
        }
      );
    });
  }

  async getCanticlesWitchArtist(artist: string) {
    return new Promise<Canticle[]>((resolve, reject) => {
      this.apiService.getDataWitchApi('https://firebasestorage.googleapis.com/v0/b/bible-plus.appspot.com/o/sousLesAilesDeLaFoi.json?alt=media&token=f2699fd2-a119-42e3-8af1-65070f03d666', 'json').then(
        (docRef) => {
          const result: Canticle[] = [];
          ((docRef as any).Songs).forEach(function(doc) {
            if(doc.Author && doc.Author.toString() === artist.toString()) {
              result.push(doc);
            }
          });
          resolve(result);
        }
      );
    });
  }

  async getCanticleWitchId(idCanticle: string) {
    return new Promise<Canticle>((resolve, reject) => {
      this.apiService.getDataWitchApi('https://firebasestorage.googleapis.com/v0/b/bible-plus.appspot.com/o/sousLesAilesDeLaFoi.json?alt=media&token=f2699fd2-a119-42e3-8af1-65070f03d666', 'json').then(
        (docRef) => {
          let result: Canticle;
          ((docRef as any).Songs).forEach(function(doc) {
            if(doc.ID.toString() === idCanticle) {
              result = doc;
            }
          });
          resolve(result);
        }
      );
    });
  }
}
