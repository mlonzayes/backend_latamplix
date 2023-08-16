import { CompanyController } from "./controller/company.controller";
import { BaseRouter } from "../shared/router/router";

export class CompanyRouter extends BaseRouter<CompanyController>{
    constructor(){
        super(CompanyController)
    }
    routes(): void {
        this.router.get("/companies",(req,res)=>this.controller.getUsers(req,res));
        this.router.get("/company/:id",(req,res)=>this.controller.getUsersById(req,res));
        this.router.post("/createCompany",(req,res)=>this.controller.createUsers(req,res));
        this.router.delete("/deleteCompany",(req,res)=>this.controller.deleteUsers(req,res));
        this.router.put("/updateCompany/:id",(req,res)=>this.controller.updateUser(req,res));
    }

}