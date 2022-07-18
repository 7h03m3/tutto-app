import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TutoService} from "../api/tuto.service";
import {MatDialog} from "@angular/material/dialog";
import {PlayerDeleteDialogComponent} from "./player-delete-dialog/player-delete-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'nickname', 'action'];
  dataSource$: any;

  constructor(private tutoService: TutoService, private router: Router, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.dataSource$ = this.tutoService.getPlayers();
    this.changeDetectorRefs.detectChanges();
  }

  onDelete(id: number, firstName: string, lastName: string) {
    let dialogRef = this.dialog.open(PlayerDeleteDialogComponent, {
      data: {
        firstName: firstName,
        lastName: lastName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tutoService.deletePlayer(id).subscribe(data => this.refresh());
      }
    })
  }

  onEdit(id: number) {
    this.router.navigate(['/player/edit', {id: id}]);
  }
}
