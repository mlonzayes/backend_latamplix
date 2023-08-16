import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../Config/base.service";
import { CompanyDTO } from "../dto/company.dto";
import { CompanyEntity } from "../entities/company.entity";


export class CompanyService extends BaseService<CompanyEntity>{
    constructor(){
        super(CompanyEntity);
    };
    async findAll():Promise<CompanyEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<CompanyEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createUser(body:CompanyEntity):Promise<CompanyEntity>{
        return (await this.execRepository).save(body);
    };
    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updateUser(id:string,infoUpdate:CompanyEntity):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};