import express, { Router } from "express";
import { loginFunction } from "../controllers/auth.controller";

const router: Router = express.Router();

router.post('/login', loginFunction);

export default router;