import {Module} from '@nestjs/common';
import {PlayersService} from './players.service';
import {PlayersController} from './players.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerEntity} from "../schemas/player.schema";

@Module({
    imports: [TypeOrmModule.forFeature([PlayerEntity])],
    providers: [PlayersService],
    controllers: [PlayersController]
})
export class PlayersModule {
}
