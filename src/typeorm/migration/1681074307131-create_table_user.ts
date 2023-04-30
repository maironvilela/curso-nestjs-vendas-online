import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableUser1675388649812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'cpf',
            type: 'varchar(100)',
          },
          {
            name: 'name',
            type: 'varchar(100)',
          },
          {
            name: 'phone',
            type: 'varchar(100)',
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'password',
            type: 'varchar(100)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
