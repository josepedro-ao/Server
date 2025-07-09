import ffmpegStatic from "ffmpeg-static";
import ffmpeg, { FfmpegCommand } from "fluent-ffmpeg";

// Verifica se ffmpegStatic não é null antes de usá-lo
if (!ffmpegStatic) {
  throw new Error(
    "ffmpeg-static não encontrado."
  );
}

ffmpeg.setFfmpegPath(ffmpegStatic as string);

const inputPath: string = "test.mp4";

// Opções para reduzir o tamanho do arquivo MP4
const videoCodec: string = "libx264"; 
const audioCodec: string = "aac"; 
const videoBitrate: string = "300k"; 
const audioBitrate: string = "96k"; 
const crf: number = 30; 

export const comrpessMidia = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const value = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const outputPath: string = `public/output_dash/${value}.mp4`;
    const ffmpegCommand: FfmpegCommand = ffmpeg()
      .input(file)
      .videoCodec(videoCodec)
      .audioCodec(audioCodec)
      .videoBitrate(videoBitrate)
      .audioBitrate(audioBitrate)
      .addOption("-crf", crf.toString())
      .output(outputPath);

    ffmpegCommand
      .on("end", () => {
        console.log("Conversão para MP4 completa");
        resolve(outputPath); // Resolva a promessa com o caminho do arquivo de saída
      })
      .on("error", (err: any) => {
        console.error("Erro durante a conversão para MP4:", err);
        reject(err); // Rejeite a promessa em caso de erro
      })
      .run();

    console.log("Compress it's running!");
  });
};
