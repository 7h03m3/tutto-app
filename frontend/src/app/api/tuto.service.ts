import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Player} from "../../../../backend/src/tuto/dtos/player.dto";
import {PlayerCreate} from "../../../../backend/src/tuto/dtos/player-create.dto";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})


@Injectable()
export class TutoService {

  baseUrl: string = "http://127.0.0.1:3000/tuto/players/";

  constructor(private http: HttpClient) {
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl);
  }

  public getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.baseUrl + id);
  }

  public createPlayer(playerCreateDto: PlayerCreate): Observable<Player> {
    return this.http.post<Player>(this.baseUrl, playerCreateDto);
  }

  public updatePlayer(playerDto: Player): Observable<any> {
    return this.http.put(this.baseUrl, playerDto);
  }

  public deletePlayer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
