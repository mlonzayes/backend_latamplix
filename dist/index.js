"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_server_1 = require("./Config/config.server");
const user_router_1 = require("./Users/user.router");
const company_router_1 = require("./Company/company.router");
class ServerBootstrap extends config_server_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)({
            origin: true,
            methods: "GET,HEAD,PUT,POST,DELETE,OPTIONS",
            credentials: true,
        }));
        this.app.use("/api", this.routers());
        this.dbConnect();
        this.listen();
    }
    routers() {
        return [
            new user_router_1.UserRouter().router,
            new company_router_1.CompanyRouter().router
        ];
    }
    async dbConnect() {
        return this.initConnect
            .then(() => {
            console.log("connection successfully!");
        })
            .catch((err) => {
            console.error(err);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`sever listening on port ${this.port}`);
        });
    }
}
new ServerBootstrap();
