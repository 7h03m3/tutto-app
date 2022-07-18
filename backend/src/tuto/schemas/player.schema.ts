import {EntitySchema} from 'typeorm';
import {Player} from '../dtos/player.dto';

export const PlayerEntity = new EntitySchema<Player>({
    name: 'Player',
    target: Player,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        nickName: {
            type: String,
        }
    },
});