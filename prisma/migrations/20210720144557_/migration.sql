/*
  Warnings:

  - A unique constraint covering the columns `[studentId]` on the table `SigninSession` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `SigninSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `SigninSession` DROP FOREIGN KEY `signinsession_ibfk_1`;

-- AlterTable
ALTER TABLE `SigninSession` ADD COLUMN `studentId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateIndex
CREATE UNIQUE INDEX `SigninSession.studentId_unique` ON `SigninSession`(`studentId`);

-- AddForeignKey
ALTER TABLE `SigninSession` ADD FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
