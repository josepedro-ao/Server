import { Router, Request } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const uploadPath = path.resolve(__dirname, "..", "..", "public", "uploads", "subtitles");

// Cria o diretório, se não existir
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const subtitleStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "public/uploads/subtitles");
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
export const uploadSubtitles = multer({ storage: subtitleStorage });
