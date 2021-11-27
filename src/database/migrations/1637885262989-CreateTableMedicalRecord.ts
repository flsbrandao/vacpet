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
            isNullable: true,
          },
          {
            name: "doenca",
            type: "text",
            isNullable: true,
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
            isNullable: true,
          },
          {
            name: "porte",
            type: "enum",
            enum: ["P", "M", "G"],
          },
          {
            name: "parasitario_interno",
            type: "text",
            isNullable: true,
          },
          {
            name: "parasitario_externo",
            type: "text",
            isNullable: true,
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
