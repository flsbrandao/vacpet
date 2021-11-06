import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
  } from "typeorm";
  
  export class CreateBatchesTable1636209427814 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "batches",
          columns: [
            {
              name: "id",
              type: "varchar",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "UUID()",
            },
            {
              name: "codigo_lote",
              type: "varchar",
            },
            {
              name: "vaccineId",
              type: "int",
            },
            {
                name: "manufacturerId",
                type: "int",
            },
            {
              name: "data_fabricacao",
              type: "date",
            },
            {
              name: "data_vencimento",
              type: "date",
            },
            {
              name: "quantidade",
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
        "batches",
        new TableForeignKey({
          columnNames: ["vaccineId"],
          referencedTableName: "vaccines",
          referencedColumnNames: ["id"],
        })
      );

      await queryRunner.createForeignKey(
        "batches",
        new TableForeignKey({
          columnNames: ["manufacturerId"],
          referencedTableName: "manufacturers",
          referencedColumnNames: ["id"],
        })
      );
  
      await queryRunner.query(`
        INSERT INTO batches 
        (codigo_lote, vaccineId, manufacturerId, data_fabricacao, data_vencimento, quantidade) VALUES
        ('001/21', 1, 1, '2021-11-01', '2022-02-01', 10), ('123/20', 2, 2, '2020-08-01', '2021-11-01', 10),
        ('323/20', 3, 3,'2021-02-01', '2022-12-01', 10), ('141/21', 4, 1, '2021-04-01', '2022-01-01', 10),
        ('121/20', 5, 2, '2020-03-01', '2021-12-01', 10), ('001/19', 6, 3,'2021-11-01', '2022-02-01', 10),
        ('142/21', 7, 1, '2021-05-01', '2021-09-01', 10), ('211/21', 8, 2, '2021-01-01', '2021-12-01', 10)
      `);
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("batches");
    }
  }
  