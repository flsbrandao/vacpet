import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateVaccinationTable1636212242769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vaccination",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "UUID()",
          },
          {
            name: "petId",
            type: "varchar",
          },
          {
            name: "batcheId",
            type: "varchar",
          },
          {
            name: "veterinaryId",
            type: "varchar",
          },
          {
            name: "clinicId",
            type: "varchar",
          },
          {
            name: "data_vacinacao",
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
      "vaccination",
      new TableForeignKey({
        columnNames: ["petId"],
        referencedTableName: "pets",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "vaccination",
      new TableForeignKey({
        columnNames: ["batcheId"],
        referencedTableName: "batches",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "vaccination",
      new TableForeignKey({
        columnNames: ["veterinaryId"],
        referencedTableName: "veterinarians",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "vaccination",
      new TableForeignKey({
        columnNames: ["clinicId"],
        referencedTableName: "clinics",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("vaccination");
  }
}
