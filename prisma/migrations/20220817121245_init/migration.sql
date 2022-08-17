-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,
    `user_bet_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bet_option` INTEGER NOT NULL,
    `sport` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `odd` INTEGER NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_user_bet_id_fkey` FOREIGN KEY (`user_bet_id`) REFERENCES `Bets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
