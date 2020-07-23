import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        $('.carousel').carousel();
        $('.slider').slider(
          {
            duration:2000,
            indicators:false,
            interval: 2000
          }
        );
        $('.parallax').parallax();
        $(".dropdown-trigger").dropdown();
        $('.tabs').tabs({
          duration: 800
        });
         $('.collapsible').collapsible();
         $('.materialboxed').materialbox();
      });
    })(jQuery);
  }

}
