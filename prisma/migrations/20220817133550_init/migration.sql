-- DropForeignKey
ALTER TABLE `Transactions` DROP FOREIGN KEY `Transactions_user_bet_id_fkey`;

-- AlterTable
ALTER TABLE `Transactions` MODIFY `user_bet_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_user_bet_id_fkey` FOREIGN KEY (`user_bet_id`) REFERENCES `Bets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
