import { Component, HostListener } from '@angular/core';
import { hoverAnimation } from './animations/hover';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [hoverAnimation]
})
export class AppComponent {
  resumeState = 'inactive';
  aboutMeState = 'inactive';
  projectsState = 'inactive';
  hobbiesState = 'inactive';

  resumeSelected = 'inactive';
  aboutMeSelected = 'inactive';
  projectsSelected = 'inactive';
  hobbiesSelected = 'inactive';

  // @HostListener('mouseup', ['$event'])
  // onMouseup(event: MouseEvent) { this.mouseup.emit(event); }


  openPage(selected: string) {
    this.setInactive();
    switch (selected) {
      case 'resume':
        this.resumeSelected = 'active';
        break;
      case 'about-me':
        this.aboutMeSelected = 'active';
        break;
      case 'projects':
        this.projectsSelected = 'active';
        break;
      case 'hobbies':
        this.hobbiesSelected = 'active';
    }
  }

  setInactive() {
    this.resumeSelected = 'inactive';
    this.aboutMeSelected = 'inactive';
    this.projectsSelected = 'inactive';
    this.hobbiesSelected = 'inactive';
  }

  onToggle(hoverState, isActive) {
    switch (hoverState) {
      case 'resume':
        this.resumeState = isActive;
        break;
      case 'about-me':
        this.aboutMeState = isActive;
        break;
      case 'projects':
        this.projectsState = isActive;
        break;
      case 'hobbies':
        this.hobbiesState = isActive;
    }
  }

  headerHover(hoverState: any) {
    this.onToggle(hoverState.page, hoverState.state);
  }

  close() {
    this.setInactive();
  }
}
