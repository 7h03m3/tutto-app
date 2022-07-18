import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from './player/player.component'
import {FirstComponentComponent} from "./first-component/first-component.component";
import {PlayerCreateComponent} from "./player/player-create/player-create.component";
import {PlayerEditComponent} from "./player/player-edit/player-edit.component";

const routes: Routes = [
  {path: 'player/create', component: PlayerCreateComponent},
  {path: 'player/edit', component: PlayerEditComponent},
  {path: 'player', component: PlayerComponent},

  {path: 'first/child-a', component: PlayerCreateComponent},
  {path: 'first/child-b', component: PlayerComponent},
  {path: 'first', component: FirstComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
