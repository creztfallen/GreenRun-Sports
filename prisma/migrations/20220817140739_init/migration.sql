-- AlterTable
ALTER TABLE `Bets` MODIFY `deleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Transactions` MODIFY `deleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `deleted_at` DATETIME(3) NULL;
