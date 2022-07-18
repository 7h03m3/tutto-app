import {Component, ViewChild} from '@angular/core';
import {SideNavigationComponent} from "./side-navigation/side-navigation.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tuto App';
  showSideBar: boolean = true;

  @ViewChild(SideNavigationComponent) child!: SideNavigationComponent;

  toggleSideBar() {
    this.showSideBar = !this.showSideBar
    this.child.opened = this.showSideBar;
  }
}


