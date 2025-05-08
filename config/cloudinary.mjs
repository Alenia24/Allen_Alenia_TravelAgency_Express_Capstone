import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "dotenv";
config();

// Cloudinary Configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Set up path in cloudinary to store the images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "trips",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export { cloudinary, storage };
