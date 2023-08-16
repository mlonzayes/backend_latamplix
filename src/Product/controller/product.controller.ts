import {Request,Response} from "express"
import { ProductService } from "../services/product.service";
import { HttpResponse } from "../../shared/response/http.status.response";
import { DeleteResult, UpdateResult } from "typeorm";


export class ProductController{
    constructor(
      private readonly userService:ProductService=new ProductService(),
      private readonly httpResponse:HttpResponse=new HttpResponse()
      ){}
    
    async get(req:Request,res:Response){//traemos todos los usuarios
      try{
        const data=await this.userService.findAll();
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };
    
    async getById(req:Request,res:Response){//traemos un usuario por id
      try{
        const {id}=req.params; 
        const data=await this.userService.findUserById(id);
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };

    async create(req:Request,res:Response){//creamos un usuario
        try{
          const data=await this.userService.createUser(req.body);
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async update(req:Request,res:Response){//actualizamos un usuario
        try{
          const {id}=req.params;
          const data:UpdateResult=await this.userService.updateUser(id,req.body);
          if(!data.affected)return this.httpResponse.InternalServerError(res,"Update error!")
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async delete(req:Request,res:Response){//eliminamos un usuario
        try{
            const {id}=req.params;
            const data:DeleteResult=await this.userService.deleteUser(id);
            if (!data.affected)return this.httpResponse.InternalServerError(res,"Delete error!")
            return this.httpResponse.Ok(res,data)
        }catch(e){
            return this.httpResponse.InternalServerError(res,e)
        }};
    

    
}