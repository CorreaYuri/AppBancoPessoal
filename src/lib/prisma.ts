// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Esta é uma solução para evitar que o Next.js crie
// muitas conexões com o banco durante o desenvolvimento
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;