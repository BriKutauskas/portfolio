import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  visible = false;
  selected;
  items = ['recruiter', 'employer', 'friend', 'foe'];
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = !this.visible;
  }

  setSelected(selected) {
    if (this.selected !== selected) {
      this.selected = selected;
    } else {
      this.selected = !selected;
    }
  }

}
