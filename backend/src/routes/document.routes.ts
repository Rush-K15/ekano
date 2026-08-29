import { Router } from "express";

import {
  createDocument,
  deleteDocument,
  getAllDocuments,
} from "../controllers/document.controller.js";

const router = Router();

router.get("/", getAllDocuments);
router.post("/", createDocument);
router.delete("/:id", deleteDocument);

export default router;
