import { IsNotEmpty } from 'class-validator';

export class ArticleDto {
  /**
   * Title column
   *
   * @type {string}
   */
  @IsNotEmpty()
  public title!: string;

  /**
   * Body column
   *
   * @type {string}
   */
  @IsNotEmpty()
  public body!: string;
}
