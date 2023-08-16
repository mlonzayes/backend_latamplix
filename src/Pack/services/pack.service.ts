import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../Config/base.service";
import { PackDTO } from "../dto/pack.dto";
import { PackEntity } from "../entities/pack.entity";


export class PackService extends BaseService<PackEntity>{
    constructor(){
        super(PackEntity);
    };
    async findAll():Promise<PackEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<PackEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createUser(body:PackDTO):Promise<PackEntity>{
        return (await this.execRepository).save(body);
    };
    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updateUser(id:string,infoUpdate:PackDTO):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};