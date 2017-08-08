import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showDropDown = false;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  @Output() hover: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  dropdown() {
    this.showDropDown = !this.showDropDown;
  }

  setSelected(pageName: string) {
    this.selected.emit(pageName);
    this.showDropDown = false;
  }

  onToggle(page: string, state: string) {
    this.hover.emit({page: page, state: state});
  }
}
