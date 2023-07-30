import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactCreatedAt1690745073782 implements MigrationInterface {
    name = 'ContactCreatedAt1690745073782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "created_at" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAt" TO "created_at"`);
    }

}
