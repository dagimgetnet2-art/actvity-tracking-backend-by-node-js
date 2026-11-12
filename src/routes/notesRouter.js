import express from "express" ;
import { createnote, deletebyid, getAllnotes, updatebyid } from "../controllers/notesController.js";

const router = express.Router();
router.get("/", getAllnotes);
router.post("/",createnote);

router.put("/:id",updatebyid);

router.delete("/:id",deletebyid);

export default router;