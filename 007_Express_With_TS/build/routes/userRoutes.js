"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// user controller
var userController_1 = require("../controllers/userController");
router
    .route("/login")
    .get(userController_1.getLogin)
    .post(userController_1.postLogin);
router.route("/logout").get(userController_1.getLogout);
router.route("/protected").get(userController_1.requireAuth, userController_1.getProtected);
router
    .route("/")
    .get(userController_1.getAllUsers)
    .post(userController_1.createNewUser);
router
    .route("/:id")
    .get(userController_1.getOneUser)
    .patch(userController_1.updateOneUser)
    .delete(userController_1.deleteOneUser);
module.exports = router;
