import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

  fileFilter: (_request, file, callback) => {
    if (file.mimetype !== "application/pdf") {
      callback(new Error("Only PDF files are supported."));
      return;
    }

    callback(null, true);
  },
});
