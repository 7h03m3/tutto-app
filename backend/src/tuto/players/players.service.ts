import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Player} from "../dtos/player.dto";
import {PlayerCreate} from "../dtos/player-create.dto";

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player)
        private readonly playerRepository: Repository<Player>,
    ) {
    }

    findAll(): Promise<Player[]> {
        return this.playerRepository.find();
    }

    findOne(id: number): Promise<Player> {
        return this.playerRepository.findOneBy({id: id});
    }

    updateOne(playerDto: Player): Promise<any> {
        return this.playerRepository.update({id: playerDto.id}, playerDto);
    }

    findByLastName(lastName: string): Promise<Player[]> {
        return this.playerRepository.findBy({lastName: lastName});
    }

    async create(playerCreateDto: PlayerCreate): Promise<Player> {
        let entity = new Player();
        entity.firstName = playerCreateDto.firstName;
        entity.lastName = playerCreateDto.lastName;
        entity.nickName = playerCreateDto.nickName;

        await this.playerRepository.save(entity);

        return entity;
    }

    delete(id: number): Promise<any> {
        return this.playerRepository.delete({id: id});
    }
}
