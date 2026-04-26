// @ts-nocheck
import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import authRouter from "./auth.js";
import skillsRouter from "./skills.js";
import providersRouter from "./providers.js";
import jobsRouter from "./jobs.js";
import dashboardRouter from "./dashboard.js";
import walletRouter from "./wallet.js";
import adminRouter from "./admin.js";
import withdrawalsRouter from "./withdrawals.js";
import settingsRouter from "./settings.js";
import usersRouter from "./users.js";
import contentRouter from "./content.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(skillsRouter);
router.use(providersRouter);
router.use(jobsRouter);
router.use(dashboardRouter);
router.use(walletRouter);
router.use(adminRouter);
router.use(withdrawalsRouter);
router.use(settingsRouter);
router.use(usersRouter);
router.use(contentRouter);

export default router;
