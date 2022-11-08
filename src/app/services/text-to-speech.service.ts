import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private http: HttpClient) { }

  getSoundPost(textBase: string, language: string) {

    const encodedParams = new URLSearchParams();
    encodedParams.append('voice_code', language === 'fr' ? 'fr-FR-4' : 'en-GB-6');
    encodedParams.append('text', textBase);
    encodedParams.append('speed', '1.00');
    encodedParams.append('pitch', '1.00');
    encodedParams.append('output_type', 'audio_url');

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': environment.rapidApiKey,
        'X-RapidAPI-Host': environment.apiTextToSpeech
      },
      body: encodedParams
    };

    return new Promise<void>((resolve, reject) => {
      fetch('https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize', options)
        .then(response => {
          resolve((response.json() as any));
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    });
  }

  async putAudioInDataBase(element) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('TextToSpeech').doc().set(Object.assign({}, element)).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getAudioWitchDataBase(texte: string) {
    return new Promise<string>((resolve, reject) => {
      firebase.firestore().collection('TextToSpeech').where('txt', '==', texte.toString()).get().then(
        (docRef) => {
          let result: any;
          docRef.forEach(function(doc) {
            result = doc.data().url;
          });
          resolve(result as any);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /*getSoundPost(textBase: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      //.set('X-RapidAPI-Key', 'c79e7cce1dmsh6fd8ba52278c9d4p1d6288jsn7bbcd57be239')
      .set('X-RapidAPI-Key', '7374653d3emsh9e44ba765921de7p1bf0d1jsn00a6b40ff342')
      .set('X-RapidAPI-Host', 'voice-text-to-speech.p.rapidapi.com');

    const body = { text: textBase, voice: 'std-en-US-01', format: 'mp3' };

    return new Promise<void>((resolve, reject) => {
      this.http.post('https://voice-text-to-speech.p.rapidapi.com/read', body, {headers}).subscribe({
        next: (res: any) => {
          resolve('data:audio/mp3;base64,' + res.data.audio);
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });
  }*/
}
