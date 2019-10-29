import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'rahasia',
      database: 'nest_test',
      synchronize: true,
      entities: [Article],
      migrations: [__dirname + '/migration/**/*.ts'],
      subscribers: [__dirname + '/subscriber/**/*.ts'],
    }),
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
