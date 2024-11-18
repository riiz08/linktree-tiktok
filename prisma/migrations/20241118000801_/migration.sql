/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `FashionPria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `FashionWanita` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Parfum` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FashionPria_name_key" ON "FashionPria"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FashionWanita_name_key" ON "FashionWanita"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Parfum_name_key" ON "Parfum"("name");
