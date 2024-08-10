import { PrismaClient } from '@prisma/client';

const prismaClientSignature = () => new PrismaClient();

declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSignature>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSignature();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
