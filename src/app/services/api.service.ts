import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataWitchApi(link, type: any = 'text') {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      .set('X-RapidAPI-Key', environment.rapidApiKey)
      .set('X-RapidAPI-Host', environment.apiBible);

    return new Promise<void>((resolve, reject) => {
        this.http.get(environment.apiCors + '/' + link, {headers, responseType: type}).subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err: any) => {
            reject(err);
          }
        });
      });
    }
}
