-- CreateTable
CREATE TABLE `User_Bets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `bet_id` INTEGER NULL,
    `odd` DOUBLE NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Bets` ADD CONSTRAINT `User_Bets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Bets` ADD CONSTRAINT `User_Bets_bet_id_fkey` FOREIGN KEY (`bet_id`) REFERENCES `Bets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
