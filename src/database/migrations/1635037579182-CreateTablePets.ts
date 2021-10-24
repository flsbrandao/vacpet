import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTablePets1635037579182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pets",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "UUID()",
          },
          {
            name: "userId",
            type: "varchar",
          },
          {
            name: "foto",
            type: "varchar",
            isNullable: true,
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
            name: "sexo",
            type: "enum",
            enum: ["M", "F"],
          },
          {
            name: "breedId",
            type: "int",
          },
          {
            name: "data_nascimento",
            type: "date",
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
        "pets",
        new TableForeignKey({
          columnNames: ["specieId"],
          referencedTableName: "species",
          referencedColumnNames: ["id"],
        })
      );

      await queryRunner.createForeignKey(
        "pets",
        new TableForeignKey({
          columnNames: ["breedId"],
          referencedTableName: "breeds",
          referencedColumnNames: ["id"],
        })
      );

      await queryRunner.createForeignKey(
        "pets",
        new TableForeignKey({
          columnNames: ["userId"],
          referencedTableName: "users",
          referencedColumnNames: ["id"],
        })
      );

      
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE pets');
  }
}
