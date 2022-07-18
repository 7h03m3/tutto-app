import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {SideNavigationEntry} from "./side-navigation-entry";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})


export class SideNavigationComponent implements OnInit {
  @Input() opened: boolean = false;

  menuEntries: SideNavigationEntry[] = [];

  menuMap: Map<string, SideNavigationEntry[]> = new Map([
    ['/player', [
      {name: "Übersicht", icon: "home", link: "/player", hide: false},
      {name: "Erstellen", icon: "add", link: "/player/create", hide: false},
      {name: "Editieren", icon: "edit", link: "/player/edit", hide: true}
    ]],

    ['/first', [
      {name: "first1", icon: "error", link: "/first/child-a", hide: false},
      {name: "hallo chrigi", icon: "bluetooth", link: "/first", hide: false},
      {name: "first2", icon: "remove", link: "/first/child-b", hide: false}]]
  ]);


  constructor(private router: Router, private currentRoute: ActivatedRoute, private cdref: ChangeDetectorRef) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuEntries.length = 0;

        let found = this.menuMap.has(event.url);
        if (found) {
          let mapEntry = this.menuMap.get(event.url)!;
          this.menuEntries = [...mapEntry];
        } else {
          for (let [key, value] of this.menuMap) {
            for (let entry of value) {
              found = (event.url.startsWith(entry.link));
              if (found) {
                this.menuEntries = [...value];
                break;
              }
            }

            if (found) {
              break;
            }
          }
        }
        
        this.opened = found;
        this.cdref.detectChanges();
      }
    });


  }

  async ngOnInit() {

  }
}
