import { Component, OnInit } from '@angular/core';
import * as $ from "./../../../../assets/js/jquery";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.arlo_tm_progress').each(function(i) {
        var progress 		= $(this);
        var pValue 			= parseInt(progress.data('value'), 10);
        var pColor			= progress.data('color');
        var pBarWrap 		= progress.find('.arlo_tm_bar_wrap');
        var pBar 			= progress.find('.arlo_tm_bar');
        pBar.css({ width: pValue+'%', backgroundColor: pColor });
        setTimeout(function(){pBarWrap.addClass('open');},(i*500));
      });
    });
  }

}
