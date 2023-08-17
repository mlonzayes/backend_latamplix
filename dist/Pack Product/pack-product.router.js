"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackProductRouter = void 0;
const router_1 = require("../shared/router/router");
const pack_product_controller_1 = require("./controller/pack-product.controller");
class PackProductRouter extends router_1.BaseRouter {
    constructor() {
        super(pack_product_controller_1.PackProductController);
    }
    routes() {
        this.router.get("/packs", (req, res) => this.controller.get(req, res));
        this.router.get("/pack/:id", (req, res) => this.controller.getById(req, res));
        this.router.post("/createPack", (req, res) => this.controller.create(req, res));
        this.router.delete("/deletePack", (req, res) => this.controller.delete(req, res));
        this.router.put("/updatePack/:id", (req, res) => this.controller.update(req, res));
    }
}
exports.PackProductRouter = PackProductRouter;
