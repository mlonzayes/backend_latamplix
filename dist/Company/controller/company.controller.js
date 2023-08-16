"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_service_1 = require("../service/company.service");
const http_status_response_1 = require("../../shared/response/http.status.response");
class CompanyController {
    constructor(userService = new company_service_1.CompanyService(), httpResponse = new http_status_response_1.HttpResponse()) {
        this.userService = userService;
        this.httpResponse = httpResponse;
    }
    async getUsers(req, res) {
        try {
            const data = await this.userService.findAll();
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async getUsersById(req, res) {
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
    async createUsers(req, res) {
        try {
            const data = await this.userService.createUser(req.body);
            return this.httpResponse.Ok(res, data);
        }
        catch (e) {
            return this.httpResponse.InternalServerError(res, e);
        }
    }
    ;
    async updateUser(req, res) {
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
    async deleteUsers(req, res) {
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
exports.CompanyController = CompanyController;
