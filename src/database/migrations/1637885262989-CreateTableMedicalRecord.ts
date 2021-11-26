import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableMedicalRecord1637885262989
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "medicalRecord",
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
            isUnique: true,
          },
          {
            name: "alergia",
            type: "text",
          },
          {
            name: "doenca",
            type: "text",
          },
          {
            name: "peso",
            type: "float",
          },
          {
            name: "medicamentos",
            type: "text",
          },
          {
            name: "pelagem",
            type: "varchar",
          },
          {
            name: "porte",
            type: "enum",
            enum: ["P", "M", "G"],
          },
          {
            name: "parasitario_interno",
            type: "text",
          },
          {
            name: "parasitario_externo",
            type: "text",
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
      "medicalRecord",
      new TableForeignKey({
        columnNames: ["petId"],
        referencedTableName: "pets",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("medicalRecord");
  }
}
