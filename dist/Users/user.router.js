"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controller_1 = require("./controllers/user.controller");
const router_1 = require("../shared/router/router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
        this.router.get("/user/:id", (req, res) => this.controller.getUsersById(req, res));
        this.router.post("/createUser", (req, res) => this.controller.createUsers(req, res));
        this.router.delete("/deleteUser", (req, res) => this.controller.deleteUsers(req, res));
        this.router.put("/updateUser/:id", (req, res) => this.controller.updateUser(req, res));
    }
}
exports.UserRouter = UserRouter;
