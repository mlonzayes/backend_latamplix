"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackController = void 0;
const pack_service_1 = require("../services/pack.service");
const http_status_response_1 = require("../../shared/response/http.status.response");
class PackController {
    constructor(userService = new pack_service_1.PackService(), httpResponse = new http_status_response_1.HttpResponse()) {
        this.userService = userService;
        this.httpResponse = httpResponse;
    }
    async get(req, res) {
        try {
            const data = await this.userService.findAll();
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async getById(req, res) {
        try {
            const { id } = req.params;
            const data = await this.userService.findUserById(id);
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async create(req, res) {
        try {
            const data = await this.userService.createUser(req.body);
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await this.userService.updateUser(id, req.body);
            if (!data.affected)
                return this.httpResponse.InternalServerError(res, "Update error!");
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await this.userService.deleteUser(id);
            if (!data.affected)
                return this.httpResponse.InternalServerError(res, "Delete error!");
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
}
exports.PackController = PackController;
