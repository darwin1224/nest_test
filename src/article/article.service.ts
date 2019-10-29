import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  /**
   * Constructor
   *
   * @param {Repository<Article>} article
   * @returns {void}
   */
  public constructor(@InjectRepository(Article) private readonly article: Repository<Article>) {}

  /**
   * Get all data
   *
   * @returns {Promise<Article[]>}
   */
  public getAllArticle(): Promise<Article[]> {
    return this.article.find();
  }

  /**
   * Get data by id
   *
   * @param {number} id
   * @returns {Promise<Article>}
   */
  public getArticleById(id: number): Promise<Article> {
    return this.article.findOne(id);
  }

  /**
   * Insert data
   *
   * @param {Article} params
   * @returns {Promise<Article>}
   */
  public insertArticle(params: ArticleDto): Promise<Article> {
    return this.article.save(params);
  }

  /**
   * Update data by id
   *
   * @param {number} id
   * @param {Article} params
   * @returns {Promise<UpdateResult>}
   */
  public updateArticle(id: number, params: Article): Promise<UpdateResult> {
    return this.article.update(id, params);
  }

  /**
   * Delete data by id
   *
   * @param {number} id
   * @returns {Promise<DeleteResult>}
   */
  public deleteArticle(id: number): Promise<DeleteResult> {
    return this.article.delete(id);
  }
}
