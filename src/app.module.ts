import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      //host: 'db', // Use o nome do serviço "db" ao invés de "localhost"
      //port: 3306,
      //username: 'mks-backend',
      //password: 'mks-backend',
      database: 'mks-backend',
      entities: [],
      synchronize: true,
    }),
    MoviesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmModule],
})
export class AppModule {
  constructor() {}
}
