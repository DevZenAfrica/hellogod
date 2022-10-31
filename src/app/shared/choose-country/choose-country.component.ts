import { Component, OnInit } from '@angular/core';
import {Pays} from '../../models/pays';
import {Utilisateur} from '../../models/utilisateur';
import {AlertService} from '../../services/alert.service';
import {AlertController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';
import {AuthentificationService} from '../../services/authentification.service';
import {UtilisateurService} from '../../services/utilisateur.service';
import {PaysService} from '../../services/pays.service';

@Component({
  selector: 'app-choose-country',
  templateUrl: './choose-country.component.html',
  styleUrls: ['./choose-country.component.scss'],
})
export class ChooseCountryComponent implements OnInit {

  inputPays: Pays[] = [];
  currentUser: Utilisateur;
  idPaySelect: any;
  paySelect: any;
  isLoading = false;

  constructor(private alertService: AlertService, private alertController: AlertController, private storageService: StorageService, private authService: AuthentificationService, private userService: UtilisateurService, private paysService: PaysService) { }

  ngOnInit() {
    this.idPaySelect = this.storageService.getItem('paysSelect') ? this.storageService.getItem('paysSelect') : '';
    if(this.idPaySelect !== '') { this.initializeObjetPays(this.idPaySelect); }
    this.storageService.watchStorage().subscribe((data) => {
      if(this.idPaySelect !== this.storageService.getItem('paysSelect')) {
        location.reload();
      }
    });

    this.paysService.getPays().then(
      (data8) => {
        this.inputPays = data8;
      }
    );
  }

  closePopOver() {
    document.getElementById('modalPopOver').classList.add('hidden');
  }

  printPop() {
    document.getElementById('modalPopOver').classList.remove('hidden');
  }

  saveCountry(paysChoice: Pays) {
    this.isLoading = true;

    if(this.idPaySelect !== paysChoice.id) {

      this.authService.isAuthenticated().then(
        (result) => {
          if(result) {
            this.userService.getCurrentUtilisateur().then(
              (data25) => {
                data25.idCountry = paysChoice.id;
                this.userService.updateCurrentUser(data25).then(
                  () => {
                    this.alertService.print('Done!');
                    this.storageService.setItem('paysSelect', paysChoice.id);
                    this.paySelect = paysChoice;
                    this.idPaySelect = paysChoice.id;
                    this.isLoading = false;
                  }
                );
              }
            );
          } else {
            this.storageService.setItem('paysSelect', paysChoice.id);
            this.paySelect = paysChoice;
            this.idPaySelect = paysChoice.id;
            this.isLoading = false;
          }
        }
      );
    }
  }

  async presentAllCountry() {
    const alert = await this.alertController.create({
      header: 'Choose your country',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (paysChoice: Pays) => {

          }
        }
      ],
      inputs: this.inputPays
    });

    await alert.present();
  }

  initializeObjetPays(idPays: string) {
    this.paysService.getPaysWitchId(idPays).then(
      (data) => {
        this.paySelect = data;
      }
    );
  }

}
