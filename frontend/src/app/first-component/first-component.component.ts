import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TutoService} from "../api/tuto.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'action'];
  dataSource$: any;
  deleteClicked: boolean = false;

  constructor(private tutoService: TutoService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.deleteClicked = false;
    this.dataSource$ = this.tutoService.getPlayers();
    this.changeDetectorRefs.detectChanges();
  }

  onDelete(id: number) {
    this.deleteClicked = true;
    this.tutoService.deletePlayer(id).subscribe(data => this.refresh());
  }
}
