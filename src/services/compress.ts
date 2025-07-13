import ffmpegStatic from "ffmpeg-static";
import ffmpeg, { FfmpegCommand } from "fluent-ffmpeg";
import fs from "fs";
import path from "path";

// ✅ Define caminho do binário do ffmpeg
ffmpeg.setFfmpegPath(ffmpegStatic!.toString()); // <-- ESTA LINHA É ESSENCIAL

export const compressMidia = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const value = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const outputDir = path.resolve("public/output_dash");
    const outputPath: string = path.join(outputDir, `${value}.mp4`);

    // ✅ Garante que a pasta de saída exista
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const ffmpegCommand: FfmpegCommand = ffmpeg()
      .input(file)
      .videoCodec("libx264")
      .audioCodec("aac")
      .videoBitrate("300k")
      .audioBitrate("96k")
      .addOption("-crf", "30")
      .output(outputPath);

    ffmpegCommand
      .on("end", () => {
        console.log("Conversão para MP4 completa");
        resolve(outputPath);
      })
      .on("error", (err: any) => {
        console.error("Erro durante a conversão para MP4:", err);
        reject(err);
      })
      .run();

    console.log("Compress it's running!");
    console.log("FFMPEG PATH:", ffmpegStatic);
  });
};
