import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isCollapsed = false;
  readRainbow: any;
  constructor() {

  }

  ngOnInit() {
    let unorderedList: any;
    const readRainbow = function ($event) {
      unorderedList = document.getElementById('navbar');
      unorderedList.height = '6em';
    };
  }
}
