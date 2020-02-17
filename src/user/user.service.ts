import { DbsService } from './../dbs/dbs.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private dbs: DbsService;
  findOneById (id: number) {
    return this.dbs.findOneById(id);
  }

  findAll () {
    return this.dbs.findAll();
  }
}
