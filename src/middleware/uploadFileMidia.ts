import multer from "multer";
import { Router, Request } from "express";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const uploadPath = path.resolve(__dirname, "..", "..", "public", "uploads", "midia");

// Cria o diretório, se não existir
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const midiaStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "public/uploads/midia");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const uploadMidia = multer({ storage: midiaStorage });
