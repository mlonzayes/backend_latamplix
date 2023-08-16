import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1692223815342 implements MigrationInterface {
    name = 'Migrate1692223815342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`token_quantity\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`token_quantity\``);
    }

}
