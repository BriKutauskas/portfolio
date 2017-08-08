import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { expandAnimation } from '../animations/expand';
import { expandBackgroundAnimation } from '../animations/expandBackground';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [expandAnimation, expandBackgroundAnimation]
})
export class CollapseComponent implements OnInit {
  @Input() title = '';
  open = false;
  @Output() closePage = new EventEmitter();
  @Input() trigger = 'inactive';
  constructor() {
  }

  ngOnInit() {
  }

  expand() {
    this.open = !this.open;
  }

  close() {
    this.closePage.emit();
  }



}
