import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../Config/base.service";
import { PackProductEntity } from "../entities/pack-product.entity";


export class PackProductService extends BaseService<PackProductEntity>{
    constructor(){
        super(PackProductEntity);
    };
    async findAll():Promise<PackProductEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<PackProductEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createUser(body:PackProductEntity):Promise<PackProductEntity>{
        return (await this.execRepository).save(body);
    };
    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updateUser(id:string,infoUpdate:PackProductEntity):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};