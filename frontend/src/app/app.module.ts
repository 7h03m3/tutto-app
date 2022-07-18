import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "./shared/material.module";

import {AppComponent} from './app.component';
import {FirstComponentComponent} from './first-component/first-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PlayerComponent} from './player/player.component';
import {AppRoutingModule} from './app-routing.module';
import {SideNavigationComponent} from './side-navigation/side-navigation.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';
import {FormsModule} from "@angular/forms";
import {PlayerDeleteDialogComponent} from './player/player-delete-dialog/player-delete-dialog.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PlayerComponent,
    SideNavigationComponent,
    PlayerCreateComponent,
    PlayerDeleteDialogComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
