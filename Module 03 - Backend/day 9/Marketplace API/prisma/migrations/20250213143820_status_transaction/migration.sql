-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PAID', 'PENDING');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING';
