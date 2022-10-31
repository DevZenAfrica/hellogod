import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-news',
  templateUrl: './print-news.component.html',
  styleUrls: ['./print-news.component.scss'],
})
export class PrintNewsComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pager: false,
    scrollbar: false,
    autoplay:true
  };

  constructor() { }

  ngOnInit() {}

}
