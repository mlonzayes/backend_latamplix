import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../Config/base.service";

import { ProductEntity } from "../entities/product.entity";


export class ProductService extends BaseService<ProductEntity>{
    constructor(){
        super(ProductEntity);
    };
    async findAll():Promise<ProductEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<ProductEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createUser(body:ProductEntity):Promise<ProductEntity>{
        return (await this.execRepository).save(body);
    };
    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updateUser(id:string,infoUpdate:ProductEntity):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};