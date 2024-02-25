import { Router } from "express";

// CONTROLLERS

import ClientsController from "../../controllers/clients.controller";

// MIDDLEWARES

import checkResourceExists from "../../middlewares/checkResourceExists";

// ROUTER

const router = Router();

// ROUTES

router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.send(await ClientsController.getAll({}));
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  checkResourceExists(ClientsController),
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    await ClientsController.updateById(id, req.body);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
