const cloudinary = require('cloudinary').v2;

// Config cliente Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Lógica de subida de imagen
const uploadImage = async (imageBuffer) => {
  const uploadResult = new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error('Error al subir la imagen a Cloudinary:', error);
        reject(error.message);
      }
      resolve(result.secure_url);
    }).end(imageBuffer);
  });

  return uploadResult;
};

module.exports = {
  uploadImage,
};