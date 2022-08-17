/*
  Warnings:

  - You are about to alter the column `odd` on the `Bets` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Bets` MODIFY `odd` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `phone` VARCHAR(191) NOT NULL;
