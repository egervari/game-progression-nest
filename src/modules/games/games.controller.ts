import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';

import { GamesRepository } from './games.repository';
import { GameDto } from './types/game-dto.class';
import { Game } from './types/game.interface';

@Controller('/games')
export class GamesController {

  constructor(private readonly gamesRepository: GamesRepository) {}

  @Get()
  public async getAllGames(
    @Query('platformId') platformId: number,
    @Query('isComplete') isComplete: boolean = null,
    @Query('name_like') name: string = '',
    @Query('_sort') sort: string,
    @Query('_order') order: string,
  ): Promise<Game[]> {
    return this.gamesRepository.findAll(platformId, isComplete, name, sort, order);
  }

  @Get('/:id')
  public async getGame(@Param('id') id: number): Promise<Game> {
    return this.gamesRepository.find(id);
  }

  @Post()
  public async createGame(@Body() game: GameDto) {
    return this.gamesRepository.create(game);
  }

  @Put('/:id')
  public async updateGame(@Param('id') id: number, @Body(new ValidationPipe()) game: GameDto) {
    return this.gamesRepository.update(id, game);
  }

  @Delete('/:id')
  public async deleteGame(@Param('id') id: number) {
    return this.gamesRepository.delete(id);
  }

}