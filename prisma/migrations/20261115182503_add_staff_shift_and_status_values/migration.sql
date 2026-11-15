-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "StaffStatus" ADD VALUE 'INTERNSHIP';
ALTER TYPE "StaffStatus" ADD VALUE 'PROBATION';
ALTER TYPE "StaffStatus" ADD VALUE 'PERMANENT';
ALTER TYPE "StaffStatus" ADD VALUE 'NOTICE_PERIOD';
ALTER TYPE "StaffStatus" ADD VALUE 'CONTRACTUAL';

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "shift" TEXT NOT NULL DEFAULT 'Full-Time (Day Shift)';
