import {Request,Response} from "express"
import { CompanyService } from "../service/company.service"
import { HttpResponse } from "../../shared/response/http.status.response";
import { DeleteResult, UpdateResult } from "typeorm";


export class CompanyController{
    constructor(
      private readonly userService:CompanyService=new CompanyService(),
      private readonly httpResponse:HttpResponse=new HttpResponse()
      ){}
    
    async getUsers(req:Request,res:Response){//traemos todos los usuarios
      try{
        const data=await this.userService.findAll();
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };
    
    async getUsersById(req:Request,res:Response){//traemos un usuario por id
      try{
        const {id}=req.params; 
        const data=await this.userService.findUserById(id);
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };

    async createUsers(req:Request,res:Response){//creamos un usuario
        try{
          const data=await this.userService.createUser(req.body);
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async updateUser(req:Request,res:Response){//actualizamos un usuario
        try{
          const {id}=req.params;
          const data:UpdateResult=await this.userService.updateUser(id,req.body);
          if(!data.affected)return this.httpResponse.InternalServerError(res,"Update error!")
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async deleteUsers(req:Request,res:Response){//eliminamos un usuario
        try{
            const {id}=req.params;
            const data:DeleteResult=await this.userService.deleteUser(id);
            if (!data.affected)return this.httpResponse.InternalServerError(res,"Delete error!")
            return this.httpResponse.Ok(res,data)
        }catch(e){
            return this.httpResponse.InternalServerError(res,e)
        }};
    

    
}