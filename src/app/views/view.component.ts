import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1, border: '1px solid blue' })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ],
})
export class ViewComponent implements OnInit {


  constructor() { }
  @Input() isVisible: boolean;

  ngOnInit() {
    this.isVisible = true;
  }

}
