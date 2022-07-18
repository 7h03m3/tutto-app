import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PlayersModule} from './tuto/players/players.module';
import {PlayerEntity} from "./tuto/schemas/player.schema";
import {GameEntity} from "./tuto/schemas/game.schema";
import {GamesModule} from './tuto/games/games.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: 'root',
        password: '2beer4me',
        database: 'playground',
        entities: [PlayerEntity, GameEntity],
        synchronize: true,
    }), PlayersModule, GamesModule],
})
export class AppModule {
}
