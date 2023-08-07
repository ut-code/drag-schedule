import express from "express";
import messageController from "../controllers/messageController";

const router = express.Router();

router.post("/", messageController.createMessage);
router.get("/", messageController.getAllMessages);
router.put("/:id", messageController.updateMessage);
router.delete("/:id", messageController.deleteMessage);

export default router;
