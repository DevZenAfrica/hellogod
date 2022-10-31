import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Utilisateur} from '../models/utilisateur';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentUser: Utilisateur;

  constructor(private authService: AuthentificationService, private userService: UtilisateurService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (data) => {
        if(data) {
          this.userService.getCurrentUtilisateur().then(
            (data1) => {
              this.currentUser = data1;
            }
          );
        }
      }
    );
  }
}
