import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Game} from "../dtos/game.dto";

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) {
    }

    findAll(): Promise<Game[]> {
        return this.gameRepository.find();
    }
}
