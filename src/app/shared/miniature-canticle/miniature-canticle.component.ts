import {Component, Input, OnInit} from '@angular/core';
import {Canticle} from '../../models/canticle';

@Component({
  selector: 'app-miniature-canticle',
  templateUrl: './miniature-canticle.component.html',
  styleUrls: ['./miniature-canticle.component.scss'],
})
export class MiniatureCanticleComponent implements OnInit {

  @Input() skin = 'all';
  @Input() data: Canticle;

  constructor() { }

  ngOnInit() {
  }

}
