import { PrismaClient } from "../prisma/generated/client.js";

export const db = new PrismaClient({accelerateUrl: process.env.DATABASE_URL || "file:./dev.db"});