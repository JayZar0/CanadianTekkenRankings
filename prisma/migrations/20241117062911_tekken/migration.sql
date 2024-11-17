-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "startggid" TEXT NOT NULL,
    "gamertag" TEXT NOT NULL,
    "main" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "wins" INTEGER NOT NULL,
    "games" INTEGER NOT NULL,
    "averageRank" DECIMAL(65,30) NOT NULL,
    "winRate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_startggid_key" ON "Player"("startggid");
