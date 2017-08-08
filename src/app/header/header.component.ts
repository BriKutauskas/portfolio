import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phone = false;
  email = false;
  @Output() selected: EventEmitter<string> = new EventEmitter();
  @Output() hover: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showDetails(detail: string) {
    switch (detail) {
      case 'email':
        this.email = !this.email;
        if (this.email) {
          this.phone = false;
        }
        break;
      case 'phone':
        this.phone = !this.phone;
        if (this.phone) {
          this.email = false;
        }
        break;
    }
  }

  setSelected(menuTitle: string) {
    this.selected.emit(menuTitle);
  }

  hoverState(stateObj: any) {
    this.hover.emit(stateObj);
  }

}
