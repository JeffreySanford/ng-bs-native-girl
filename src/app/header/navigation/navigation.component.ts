import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let isActive: any;
    const activeButton = function() {
      isActive = !isActive;
      console.log('here');
      console.log(isActive);
    };

  }
}
