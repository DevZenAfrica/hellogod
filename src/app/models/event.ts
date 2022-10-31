export class Event {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public dateStart: string, public miniature: string,  public idArticle: string) {
    this.date = new Date().toString();
  }
}
