import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DbsModule } from './dbs/dbs.module';

@Module({
  imports: [UserModule, DbsModule],
})
export class AppModule { }
