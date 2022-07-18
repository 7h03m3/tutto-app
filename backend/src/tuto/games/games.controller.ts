import {Controller, Get} from '@nestjs/common';
import {GamesService} from "./games.service";
import {Game} from "../dtos/game.dto";

@Controller('tuto/games')
export class GamesController {
    constructor(private gamesService: GamesService) {
    }

    @Get()
    findAll(): Promise<Game[]> {
        return this.gamesService.findAll();
    }
}