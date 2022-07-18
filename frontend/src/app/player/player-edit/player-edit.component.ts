import {Component, OnInit} from '@angular/core';
import {TutoService} from "../../api/tuto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../../../../backend/src/tuto/dtos/player.dto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  formValid: boolean = true;
  player: Player = new Player();

  constructor(private tutoService: TutoService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.player.id = Number(data.get('id'));
      this.tutoService.getPlayer(this.player.id).subscribe(data => {
        this.player.firstName = data.firstName;
        this.player.lastName = data.lastName;
        this.player.nickName = data.nickName;
      });
    })
  }

  public onSave() {
    this.tutoService.updatePlayer(this.player).subscribe(data => {
      this.openSnackBar(this.player.firstName + " " + this.player.lastName + " gespeichert");
    })
  }

  private openSnackBar(message: string) {
    let ref = this.snackBar.open(message, "Verbergen", {
      duration: 3000,
      verticalPosition: 'bottom'
    });

    ref.afterDismissed().subscribe(data => {
      this.router.navigate(['/player']);
    })
  }

}
