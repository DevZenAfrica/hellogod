import { Component, OnInit } from '@angular/core';
import {CanticleService} from '../services/canticle.service';
import {ActivatedRoute} from '@angular/router';
import {Canticle} from '../models/canticle';

@Component({
  selector: 'app-preview-canticle',
  templateUrl: './preview-canticle.page.html',
  styleUrls: ['./preview-canticle.page.scss'],
})
export class PreviewCanticlePage implements OnInit {

  currentCanticle: Canticle;

  constructor(private canticleService: CanticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.canticleService.getCanticleWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentCanticle = data;
      }
    );
  }

}
