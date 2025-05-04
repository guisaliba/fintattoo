import { MigrationInterface, QueryRunner } from "typeorm";

export class CoreEntitiesModeling1746326415814 implements MigrationInterface {
    name = 'CoreEntitiesModeling1746326415814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "complementaryInfo" character varying NOT NULL, "postalCode" character varying NOT NULL, "country" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "socials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "service" character varying NOT NULL, "username" character varying NOT NULL, "url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "studioId" uuid, CONSTRAINT "PK_5e3ee018e1b66c619ae3d3b3309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "studios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_76ff398ef5041c4b42618ed6111" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP WITH TIME ZONE NOT NULL, "duration" integer NOT NULL, "description" character varying NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "studioId" uuid, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "participants" ("userId" uuid NOT NULL, "studioId" uuid NOT NULL, "role" character varying NOT NULL, "transferType" character varying NOT NULL, CONSTRAINT "PK_74d1fc474d78a86e840648666a2" PRIMARY KEY ("userId", "studioId"))`);
        await queryRunner.query(`ALTER TABLE "socials" ADD CONSTRAINT "FK_4b4234e208c922a226344e3a7d0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "socials" ADD CONSTRAINT "FK_80ce722e40abb27627b94cf1220" FOREIGN KEY ("studioId") REFERENCES "studios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_01733651151c8a1d6d980135cc4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_bf9f6a6203bd5c143c72350432a" FOREIGN KEY ("studioId") REFERENCES "studios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "participants" ADD CONSTRAINT "FK_5fc9cddc801b973cd9edcdda42a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "participants" ADD CONSTRAINT "FK_7a416a26a6a51a82a8c8e4ea6fe" FOREIGN KEY ("studioId") REFERENCES "studios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participants" DROP CONSTRAINT "FK_7a416a26a6a51a82a8c8e4ea6fe"`);
        await queryRunner.query(`ALTER TABLE "participants" DROP CONSTRAINT "FK_5fc9cddc801b973cd9edcdda42a"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_bf9f6a6203bd5c143c72350432a"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_01733651151c8a1d6d980135cc4"`);
        await queryRunner.query(`ALTER TABLE "socials" DROP CONSTRAINT "FK_80ce722e40abb27627b94cf1220"`);
        await queryRunner.query(`ALTER TABLE "socials" DROP CONSTRAINT "FK_4b4234e208c922a226344e3a7d0"`);
        await queryRunner.query(`DROP TABLE "participants"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "studios"`);
        await queryRunner.query(`DROP TABLE "socials"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
