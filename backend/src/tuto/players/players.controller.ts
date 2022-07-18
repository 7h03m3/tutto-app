import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PlayersService} from "./players.service";
import {PlayerCreate} from "../dtos/player-create.dto";
import {Player} from "../dtos/player.dto";

@Controller('tuto/players')
export class PlayersController {
    constructor(private playersService: PlayersService) {
    }

    @Get()
    findAll(): Promise<Player[]> {
        return this.playersService.findAll();
    }

    @Post()
    create(@Body() createPlayerDto: PlayerCreate): Promise<Player> {
        return this.playersService.create(createPlayerDto);
    }

    @Put()
    update(@Body() playerDto: Player): Promise<any> {
        return this.playersService.updateOne(playerDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Player> {
        return this.playersService.findOne(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<any> {
        return this.playersService.delete(id);
    }

    @Get('/lastName/:name')
    findByLastName(@Param('name') name: string): Promise<Player[]> | undefined {
        return this.playersService.findByLastName(name);
    }
}
