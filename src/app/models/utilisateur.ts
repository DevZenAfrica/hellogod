import {ToolsService} from '../services/tools.service';

export class Utilisateur {
  photo = '';
  date: string;
  id: string;
  idCountry: string;
  archives: string[];
  language: string;
  jidAyoba: string;
  ipAdressInfo: string;

  constructor(public userName: string, public phone: string, public email: string, public status: number, public role: string, public typeInscription: string) {
    const gid = new ToolsService();
    this.id = gid.generateId(23);
    this.date = new Date().toString();
    this.idCountry = '';
    this.archives = [];
    this.language = '';
    this.jidAyoba = '';
    this.ipAdressInfo = '';
  }
}
