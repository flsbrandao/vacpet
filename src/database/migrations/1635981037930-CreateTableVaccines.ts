import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableVaccines1635981037930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vaccines",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "specieId",
            type: "int",
          },
          {
            name: "doses_primarias",
            type: "int",
          },
          {
            name: "intervalo_doses_primarias",
            type: "int",
          },
          {
            name: "intervalo_revacinacao",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "vaccines",
      new TableForeignKey({
        columnNames: ["specieId"],
        referencedTableName: "species",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.query(`
    INSERT INTO vaccines (nome, specieId, doses_primarias, intervalo_doses_primarias,intervalo_revacinacao) VALUES
    ('Gripe Canina',1,3,21,365), ('Antirrábica',1,2,15,365),
    ('V3', 2, 1,0,365), ('V4',2,2,30,365),
    ('Influenza',3, 2,21,730), ('Encefalomielite', 3, 2,60,365),
    ('MIXOHIPRA',4,1,0,365), ('Eravac',4,1,30,730)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("vaccines");
  }
}
