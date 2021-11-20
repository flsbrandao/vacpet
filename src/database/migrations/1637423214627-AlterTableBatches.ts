import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableBatches1637423214627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `vacpet`.`batches` CHANGE `manufacturerId` `manufactureId` INT(11)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
