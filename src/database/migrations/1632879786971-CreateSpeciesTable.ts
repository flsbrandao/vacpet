import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpeciesTable1632879786971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'species',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'nome',
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
            ]
        }));

        await queryRunner.query(`INSERT INTO species (nome)
        VALUES ('Cachorro'), ('Gato'),('Hamsters'), ('Coelho')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('species');
    }

}
