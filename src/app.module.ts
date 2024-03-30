import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-divine-wind-a54oriot.us-east-2.aws.neon.tech',
      database: 'neondb',
      username: 'neondb_owner',
      password: 'I2UuqF1GECcP',
      port: 5432,
      ssl: true,
      // connection: {
      //   options: project = 'ep-divine-wind-a54oriot',
      // },

    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
