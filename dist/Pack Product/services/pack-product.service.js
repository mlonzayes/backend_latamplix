"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackProductService = void 0;
const base_service_1 = require("../../Config/base.service");
const pack_product_entity_1 = require("../entities/pack-product.entity");
class PackProductService extends base_service_1.BaseService {
    constructor() {
        super(pack_product_entity_1.PackProductEntity);
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
exports.PackProductService = PackProductService;
;
