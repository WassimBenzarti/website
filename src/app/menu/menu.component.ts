import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AppConfig} from '../../config';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives : [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {
  private pages = AppConfig.pages;

  constructor(private router:Router) {
    console.log(router.url);
  }

  ngOnInit() {
  }


}
