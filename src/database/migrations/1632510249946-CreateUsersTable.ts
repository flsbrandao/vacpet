import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1632510249946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'UUID()'
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'endereco',
                    type: 'varchar',
                },
                {
                    name: 'telefone',
                    type: 'varchar',
                    isNullable : true
                },
                {
                    name: 'celular',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}