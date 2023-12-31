import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../Config/base.service";
import { UserEntity } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";


export class UserService extends BaseService<UserEntity>{
    constructor(){
        super(UserEntity);
    };
    async findAll():Promise<UserEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<UserEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createUser(body:UserDTO):Promise<UserEntity>{
        return (await this.execRepository).save(body);
    };
    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updateUser(id:string,infoUpdate:UserDTO):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};