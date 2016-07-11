import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  static phrase:string = 'Hello form appConfig';
  public static pages:Array<Page> = [
    {path:'/home',name:'Home'},
    {path:'/tracks',name:'Tracks'},
    {path:'/social',name:'Social'},
    {path:'/about',name:'About'}
  ];


  constructor() {}

}

interface Page{
  path:string;
  name:string;
}
