import { Router } from "express";

import usersRouter from "./users.router.api";
import clientsRouter from "./clients.router.api";
import categoriesRouter from "./categories.router.api";
import productsRouter from "./products.router.api";
import movementsRouter from "./movements.router.api";
import authRouter from "./auth.router.api";

import handleWrongMethod from "../../middlewares/wrongMethodHandler.mid";

// ROUTER

const router = Router();

// ROUTES

router.all("/auth", authRouter);
router.all("/users", usersRouter);
router.all("/clients", clientsRouter);
router.all("/products", productsRouter);
router.all("/movements", movementsRouter);
router.all("/categories", categoriesRouter);

// HANDLERS

router.all(
  "/auth|users|clients|categories|products|movements/",
  handleWrongMethod
);

export default router;
