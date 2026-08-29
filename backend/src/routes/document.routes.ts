import { Router } from "express";

import {
  createDocument,
  deleteDocument,
  getAllDocuments,
  uploadDocument,
} from "../controllers/document.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = Router();

router.get("/", getAllDocuments);
router.post("/", createDocument);
router.delete("/:id", deleteDocument);
router.post("/upload", upload.single("file"), uploadDocument);

export default router;
