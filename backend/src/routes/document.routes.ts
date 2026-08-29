import { Router } from "express";

import {
  createDocument,
  getAllDocuments,
} from "../controllers/document.controller.js";

const router = Router();

router.get("/", getAllDocuments);
router.post("/", createDocument);

export default router;
