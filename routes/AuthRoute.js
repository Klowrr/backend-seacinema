import express from "express";
import {Login, logOut, Me, Register, Update} from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);
router.post('/register',Register)
router.patch('/profile/:id',Update)

export default router;