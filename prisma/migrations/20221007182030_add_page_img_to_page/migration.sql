/*
  Warnings:

  - Added the required column `page_img` to the `pages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pages" ADD COLUMN     "page_img" TEXT NOT NULL;
