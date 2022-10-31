import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-miniature-play-audio',
  templateUrl: './miniature-play-audio.component.html',
  styleUrls: ['./miniature-play-audio.component.scss'],
})
export class MiniaturePlayAudioComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {}

}
