"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const config_server_1 = require("./config.server");
//inicializamos y traemos todos los metodos
class BaseService extends config_server_1.ConfigServer {
    constructor(getEntity) {
        super();
        this.getEntity = getEntity;
        this.execRepository = this.initRepository(getEntity);
    }
    async initRepository(e) {
        const getConn = await this.initConnect;
        return getConn.getRepository(e);
    }
}
exports.BaseService = BaseService;
