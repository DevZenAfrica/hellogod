export class Article {
  date: string;
  likes: string[];
  disLikes: string[];
  vues: string[];
  idCountry: string[];
  miniatureTop = '';
  allowComment: boolean;

  constructor(public id: string, public title: string, public content: string, public status: number, public description: string, public miniature: string, public tags: string[], public dateEvent: string, public datePublication: string, public categorie: string, public created_by: string) {
    this.date = new Date().toString();
    this.likes = [];
    this.disLikes = [];
    this.vues = [];
    this.idCountry = [];
    this.miniatureTop = '';
    this.allowComment = true;
  }
}
