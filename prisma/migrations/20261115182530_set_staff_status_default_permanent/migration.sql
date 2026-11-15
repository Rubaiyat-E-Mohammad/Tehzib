-- AlterTable
ALTER TABLE "Staff" ALTER COLUMN "status" SET DEFAULT 'PERMANENT';

-- Migrate legacy ACTIVE employment status rows to PERMANENT
UPDATE "Staff" SET "status" = 'PERMANENT' WHERE "status" = 'ACTIVE';
