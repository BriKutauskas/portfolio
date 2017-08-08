import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    CollapseComponent,
    ResumeComponent,
    ProjectsComponent,
    HobbiesComponent,
    PopUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
