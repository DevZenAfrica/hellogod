export class Pays {

  date: string;
  language: string;
  flag: string;

  constructor(public id: string, public name: string, public code: string) {
    this.date = new Date().toString();
    this.language = '';
    this.flag = '';
  }
}
