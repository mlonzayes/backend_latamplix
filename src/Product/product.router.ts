
import { BaseRouter } from "../shared/router/router";
import { ProductController } from "./controller/product.controller";

export class ProductRouter extends BaseRouter<ProductController>{
    constructor(){
        super(ProductController)
    }
    routes(): void {
        this.router.get("/products",(req,res)=>this.controller.get(req,res));
        this.router.get("/products/:id",(req,res)=>this.controller.getById(req,res));
        this.router.post("/createProduct",(req,res)=>this.controller.create(req,res));
        this.router.delete("/deleteProduct/:id",(req,res)=>this.controller.delete(req,res));
        this.router.put("/updateProduct/:id",(req,res)=>this.controller.update(req,res));
    }

}