import { Injectable } from '@nestjs/common';

import { database } from '../../database';

import { GameDto } from './types/game-dto.class';
import { Game } from './types/game.interface';

@Injectable()
export class GamesRepository {

  public async findAll(
    platformId: number,
    isComplete: boolean,
    name: string,
    sort: string = 'priority',
    order: string = 'desc',
  ): Promise<Game[]> {
    return database('games')
      .select('*')
      .modify(queryBuilder => {
        if (platformId) {
          queryBuilder.where('platformId', platformId);
        }

        if (isComplete !== null) {
          queryBuilder.where('isComplete', isComplete);
        }

        if (name) {
          queryBuilder.whereRaw(`lower(name) like '%${name}%'`);
        }
      })
      .orderBy(sort, order);
  }

  public async find(id: number): Promise<Game> {
    return database('games')
      .select('*')
      .where('id', id)
      .first();
  }

  public async create(game: GameDto) {
    return database('games').insert(game);
  }

  public async update(gameId: number, game: GameDto) {
    return database('games')
      .update(game)
      .where('id', gameId);
  }

  public async delete(id: number) {
    return database('games')
      .delete()
      .where('id', id);
  }

}
