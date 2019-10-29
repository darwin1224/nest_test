import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Body,
  BadRequestException,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
  /**
   * Constructor
   *
   * @param {ArticleService} article
   * @returns {void}
   */
  public constructor(private readonly article: ArticleService) {}

  /**
   * Get all resources in storage
   *
   * @returns {Promise<Article[]>}
   */
  @Get()
  public async index(): Promise<Article[]> {
    try {
      return await this.article.getAllArticle();
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }

  /**
   * Get resource by id from storage
   *
   * @param {number} id
   * @returns {Promise<Article>}
   */
  @Get('/:id')
  public async show(@Param('id') id: number): Promise<Article> {
    try {
      return await this.article.getArticleById(id);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }

  /**
   * Insert resource to the storage
   *
   * @param {Article} params
   * @returns {Promise<Article>}
   */
  @Post()
  public async store(@Body() params: ArticleDto): Promise<Article> {
    try {
      return await this.article.insertArticle(params);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  /**
   * Update a single resource from storage
   *
   * @param {number} id
   * @param {Article} params
   * @returns {Promise<UpdateResult>}
   */
  @Put('/:id')
  public async update(@Param('id') id: number, @Body() params: Article): Promise<UpdateResult> {
    try {
      return this.article.updateArticle(id, params);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  /**
   * Delete a single resource from storage
   *
   * @param {number} id
   * @returns {Promise<DeleteResult>}
   */
  @Delete('/:id')
  public async destroy(@Param('id') id: number): Promise<DeleteResult> {
    try {
      return this.article.deleteArticle(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
