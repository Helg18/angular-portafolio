import { Component, OnInit } from '@angular/core';
import * as $ from "./../../../../assets/js/jquery";

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.css']
})
export class CounterBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      "use strict";
      const jQuery = $;

      var el 			= jQuery('.arlo_tm_miniboxes');

      if(el.length){
        el.each(function(index, element) {

          var child		= jQuery(element).find('.arlo_tm_minibox');

          child.css({height:'auto'});
          // Get an array of all element heights

          var W 		= jQuery(window).width();
          if(W > 480){
            var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();

            // Math.max takes a variable number of arguments
            // `apply` is equivalent to passing each height as an argument
            var maxHeight 		= Math.max.apply(null, elementHeights);

            // Set each height to the max height
            child.css({height:maxHeight+'px'});
          }
        });
      }
    });
  }

}
