import {EntitySchema} from 'typeorm';
import {Game} from "../dtos/game.dto";

export const GameEntity = new EntitySchema<Game>({
    name: 'Game',
    target: Game,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        }
    },
});