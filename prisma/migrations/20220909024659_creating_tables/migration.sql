-- CreateTable
CREATE TABLE "times" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "logo" TEXT,
    "foto" TEXT,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaboradores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "id_time" TEXT NOT NULL,
    "isFacilitador" BOOLEAN NOT NULL DEFAULT false,
    "isSecretario" BOOLEAN NOT NULL DEFAULT false,
    "id_cargo" TEXT NOT NULL,

    CONSTRAINT "colaboradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "papeis" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "papeis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "times_nome_key" ON "times"("nome");

-- AddForeignKey
ALTER TABLE "colaboradores" ADD CONSTRAINT "colaboradores_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaboradores" ADD CONSTRAINT "colaboradores_id_cargo_fkey" FOREIGN KEY ("id_cargo") REFERENCES "papeis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
