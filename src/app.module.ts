import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as typeOrmOptions from '@config/typeorm';
import graphqlOptions from '@config/graphql';

import UserModule from '@modules/user';
import AuthModule from '@modules/register';
import RegisterModule from '@modules/auth';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmOptions),
    GraphQLModule.forRoot(graphqlOptions),
    UserModule,
    AuthModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
