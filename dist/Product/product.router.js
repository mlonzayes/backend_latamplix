"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const router_1 = require("../shared/router/router");
const product_controller_1 = require("./controller/product.controller");
class ProductRouter extends router_1.BaseRouter {
    constructor() {
        super(product_controller_1.ProductController);
    }
    routes() {
        this.router.get("/products", (req, res) => this.controller.get(req, res));
        this.router.get("/products/:id", (req, res) => this.controller.getById(req, res));
        this.router.post("/createProduct", (req, res) => this.controller.create(req, res));
        this.router.delete("/deleteProduct/:id", (req, res) => this.controller.delete(req, res));
        this.router.put("/updateProduct/:id", (req, res) => this.controller.update(req, res));
    }
}
exports.ProductRouter = ProductRouter;
