"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRouter = void 0;
const company_controller_1 = require("./controller/company.controller");
const router_1 = require("../shared/router/router");
class CompanyRouter extends router_1.BaseRouter {
    constructor() {
        super(company_controller_1.CompanyController);
    }
    routes() {
        this.router.get("/companies", (req, res) => this.controller.getUsers(req, res));
        this.router.get("/company/:id", (req, res) => this.controller.getUsersById(req, res));
        this.router.post("/createCompany", (req, res) => this.controller.createUsers(req, res));
        this.router.delete("/deleteCompany", (req, res) => this.controller.deleteUsers(req, res));
        this.router.put("/updateCompany/:id", (req, res) => this.controller.updateUser(req, res));
    }
}
exports.CompanyRouter = CompanyRouter;
