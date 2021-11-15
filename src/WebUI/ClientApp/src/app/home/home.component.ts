import { Component } from '@angular/core';
import * as AOS from 'aos';
import GLightbox from 'glightbox';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    AOS.init();
    const options = {
      strings: ['Developer.', 'Freelancer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };


 const typed = new Typed('.typed-element', options);
  }
}
