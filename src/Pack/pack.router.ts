
import { BaseRouter } from "../shared/router/router";
import { PackController } from "./controller/pack.controller";

export class PackRouter extends BaseRouter<PackController>{
    constructor(){
        super(PackController)
    }
    routes(): void {
        this.router.get("/packs",(req,res)=>this.controller.get(req,res));
        this.router.get("/pack/:id",(req,res)=>this.controller.getById(req,res));
        this.router.post("/createPack",(req,res)=>this.controller.create(req,res));
        this.router.delete("/deletePack",(req,res)=>this.controller.delete(req,res));
        this.router.put("/updatePack/:id",(req,res)=>this.controller.update(req,res));
    }

}