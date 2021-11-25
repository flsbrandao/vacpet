import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableLogin1637720448331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "login",
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
            isUnique: true
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "tipo",
            type: "enum",
            enum: ["V", "U"]
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("login");
  }
}
