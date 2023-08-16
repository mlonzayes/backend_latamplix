"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const base_service_1 = require("../../Config/base.service");
const company_entity_1 = require("../entities/company.entity");
class CompanyService extends base_service_1.BaseService {
    constructor() {
        super(company_entity_1.CompanyEntity);
    }
    ;
    async findAll() {
        return (await this.execRepository).find();
    }
    ;
    async findUserById(id) {
        return (await this.execRepository).findOneBy({ id });
    }
    ;
    async createUser(body) {
        return (await this.execRepository).save(body);
    }
    ;
    async deleteUser(id) {
        return (await this.execRepository).delete({ id });
    }
    ;
    async updateUser(id, infoUpdate) {
        return (await this.execRepository).update(id, infoUpdate);
    }
    ;
}
exports.CompanyService = CompanyService;
;
