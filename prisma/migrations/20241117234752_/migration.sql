-- CreateTable
CREATE TABLE "Parfum" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shopee" TEXT NOT NULL,
    "price" BIGINT NOT NULL,

    CONSTRAINT "Parfum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FashionPria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shopee" TEXT NOT NULL,
    "price" BIGINT NOT NULL,

    CONSTRAINT "FashionPria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FashionWanita" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shopee" TEXT NOT NULL,
    "price" BIGINT NOT NULL,

    CONSTRAINT "FashionWanita_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parfum_id_key" ON "Parfum"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FashionPria_id_key" ON "FashionPria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FashionWanita_id_key" ON "FashionWanita"("id");
