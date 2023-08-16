import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1692225890250 implements MigrationInterface {
    name = 'Migrate1692225890250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`company_name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`company_name\``);
    }

}
