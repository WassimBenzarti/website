import { Component, OnInit } from '@angular/core';
import {SoundcloudComponent} from "../soundcloud/soundcloud.component";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[SoundcloudComponent]
})
export class HomeComponent implements OnInit {

  private rows = [];
  constructor() {

    for(var  i = 0 ; i<100 ;i++ ) this.rows.push(i);
  }

  ngOnInit() {
  }

}
