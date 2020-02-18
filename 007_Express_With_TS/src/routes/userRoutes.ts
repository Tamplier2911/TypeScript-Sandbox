/*
import express from "express";

const router = express.Router();

// user controller
import {
  getLogin,
  postLogin,
  getLogout,
  requireAuth,
  getProtected,
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

router.route("/logout").get(getLogout);

router.route("/protected").get(requireAuth, getProtected);

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

*/
