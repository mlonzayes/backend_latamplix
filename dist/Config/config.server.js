"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv = __importStar(require("dotenv"));
const data_source_1 = require("./data.source");
dotenv.config({
    path: process.env.NODE_ENV !== undefined
        ? `.${process.env.NODE_ENV.trim()}.env`
        : ".env",
});
class ConfigServer {
    contructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv
        });
    }
    getEnviroment(k) {
        return process.env[k];
    }
    ;
    getNumberEnv(k) {
        return Number(this.getEnviroment(k));
    }
    ;
    get nodeEnv() {
        return this.getEnviroment("NODE_ENV")?.trim() || "";
    }
    ;
    createPathEnv(path) {
        const arrEnv = ["env"];
        if (path.length > 0) {
            const stringToArray = path;
            arrEnv.unshift(...stringToArray);
        }
        ;
        return "." + arrEnv.join(".");
    }
    ;
    get initConnect() {
        return data_source_1.AppDataSource.initialize();
    }
    ;
}
exports.ConfigServer = ConfigServer;
