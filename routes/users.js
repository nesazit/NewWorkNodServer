import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//! Update
router.put("/:id", verifyToken, update);

//! delete
router.delete("/:id", verifyToken, deleteUser);

//! get user
router.get("/find/:id", getUser);

//! sub user
router.put("/sub/:id", verifyToken, subscribe);

//! unsub user
router.put("/unsub/:id", verifyToken, unsubscribe);

//! like user
router.put("/like/:videoId", verifyToken, like);

//! dislike user
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
