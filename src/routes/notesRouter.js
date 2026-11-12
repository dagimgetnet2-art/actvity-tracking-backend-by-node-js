import express from "express" ;
import { createnote, deletebyid, getAllnotes, getbyid } from "../controllers/notesController.js";

const router = express.Router();
router.get("/", getAllnotes);

router.put("/:id",getbyid );

router.delete("/:id",deletebyid);
router.post("/",createnote);

export default router;