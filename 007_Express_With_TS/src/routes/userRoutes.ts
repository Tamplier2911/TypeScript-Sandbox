import express from "express";

const router = express.Router();

// user controller
import {
  getLogin,
  postLogin,
  getAllUsers,
  createNewUser,
  getOneUser,
  updateOneUser,
  deleteOneUser
} from "../controllers/userController";

router
  .route("/login")
  .get(getLogin)
  .post(postLogin);

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser);

router
  .route("/:id")
  .get(getOneUser)
  .patch(updateOneUser)
  .delete(deleteOneUser);

module.exports = router;
