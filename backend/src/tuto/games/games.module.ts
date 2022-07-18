import {Module} from '@nestjs/common';
import {GamesController} from './games.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GameEntity} from "../schemas/game.schema";
import {GamesService} from "./games.service";

@Module({
    imports: [TypeOrmModule.forFeature([GameEntity])],
    providers: [GamesService],
    controllers: [GamesController]
})
export class GamesModule {
}
