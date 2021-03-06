import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MenuComponent } from './menu';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[MenuComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  public title:string = 'my title app';
}
