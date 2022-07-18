import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export class PlayerDeleteDialogData {
  firstName: string = "";
  lastName: string = "";
}

@Component({
  selector: 'app-player-delete-dialog',
  templateUrl: './player-delete-dialog.component.html',
  styleUrls: ['./player-delete-dialog.component.css']
})
export class PlayerDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlayerDeleteDialogData) {
  }

  ngOnInit(): void {
  }

}
