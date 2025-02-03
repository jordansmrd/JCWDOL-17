/** @format */

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import * as streamifier from "streamifier";
import { cloudinary_config } from "../config";

cloudinary.config(cloudinary_config);

export const cloudinaryUpload = (
  file: Express.Multer.File
): Promise<UploadApiResponse> =>
  new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      (error, result: UploadApiResponse) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });

const extractPublicFromURL = (url: string) => {
  const urlParts = url.split("/");
  const publicWithExtension = urlParts[urlParts.length - 1];
  const publicId = publicWithExtension.split(".")[0];
  return publicId;
};

export const cloudinaryRemove = async (secure_url: string) => {
  try {
    const publicId = extractPublicFromURL(secure_url);
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw error;
  }
};
