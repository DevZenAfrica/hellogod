import { Component, OnInit } from '@angular/core';
import {CanticleService} from '../../services/canticle.service';
import {Canticle} from '../../models/canticle';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-canticles',
  templateUrl: './canticles.page.html',
  styleUrls: ['./canticles.page.scss'],
})
export class CanticlesPage implements OnInit {

  isSearch = false;
  loadedList: any[];
  canticles: Canticle[];
  selectionParam;
  isLoading = true;

  constructor(private canticleService: CanticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectionParam = this.route.snapshot.queryParams.artist ? this.selectionParam = 'artist' : (this.route.snapshot.queryParams.artists ? this.selectionParam = 'artists' : '');
    if(this.route.snapshot.queryParams.artist) {
      this.canticleService.getCanticlesWitchArtist(this.route.snapshot.queryParams.artist).then(
        (data) => {
          this.canticles = data;
          this.loadedList = this.canticles;
          this.isLoading = false;
        }
      );
    } if(this.route.snapshot.queryParams.artists) {
      this.canticleService.getCanticlesArtist().then(
        (data) => {
          this.canticles = data;
          this.loadedList = this.canticles;
          this.isLoading = false;
        }
      );
    } else {
      this.canticleService.getAllCanticle().then(
        (data) => {
          this.canticles = data;
          this.loadedList = this.canticles;
          this.isLoading = false;
        }
      );
    }
  }

  /* Recherche transaction */
  initializeItemsAll(): void {
    this.canticles = this.loadedList;
  }

  filterListTransaction(evt) {
    this.initializeItemsAll();

    const searchTerm = evt.detail.target.value;

    if (!searchTerm) {
      this.loadedList = this.canticles;
      return;
    }

    this.canticles = this.canticles.filter(current => {
      if (current.Composer && current.ID && current.Text && searchTerm){
        if (current.Composer.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || current.ID.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || current.Text.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }

    });
  }
  /* Fin recherche */

}
