import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_article')
export class Article {
  /**
   * Primary key id
   *
   * @type {number}
   */
  @PrimaryGeneratedColumn()
  public id!: number;

  /**
   * Title column
   *
   * @type {string}
   */
  @Column({ type: 'varchar', length: 50 })
  public title!: string;

  /**
   * Body column
   *
   * @type {string}
   */
  @Column({ type: 'varchar', length: 255 })
  public body!: string;
}
