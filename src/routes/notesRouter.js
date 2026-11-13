import express from "express" ;
import { createnote, deletebyid, getAllnotes, getbyid, updatebyid } from "../controllers/notesController.js";

const router = express.Router();
router.get("/", getAllnotes);
router.post("/",createnote);

router.put("/:id",updatebyid);

router.delete("/:id",deletebyid);
router.get("/:id", getbyid);

export default router;