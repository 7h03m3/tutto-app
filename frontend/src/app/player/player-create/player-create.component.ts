import {Component, OnInit} from '@angular/core';
import {TutoService} from "../../api/tuto.service";
import {PlayerCreate} from "../../../../../backend/src/tuto/dtos/player-create.dto";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  public formValid: boolean = true;
  public playerCreateDto: PlayerCreate = new PlayerCreate();
  public firstName: string = "";
  public lastName: string = "";

  constructor(private tutoService: TutoService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {

    this.tutoService.createPlayer(this.playerCreateDto).subscribe(data => {

      this.openSnackBar(this.playerCreateDto.firstName + " " + this.playerCreateDto.lastName + " wurde erstellt");
      this.playerCreateDto = new PlayerCreate();
    });
  }

  public openSnackBar(message: string) {
    let ref = this.snackBar.open(message, "Verbergen", {
      duration: 3000,
      verticalPosition: 'bottom'
    });

    ref.afterDismissed().subscribe(data => {
      this.router.navigate(['/player']);
    })
  }
}
