import { UserController } from "./controllers/user.controller";
import { BaseRouter } from "../shared/router/router";

export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController)
    }
    routes(): void {
        this.router.get("/users",(req,res)=>this.controller.getUsers(req,res));
        this.router.get("/user/:id",(req,res)=>this.controller.getUsersById(req,res));
        this.router.post("/createUser",(req,res)=>this.controller.createUsers(req,res));
        this.router.delete("/deleteUser",(req,res)=>this.controller.deleteUsers(req,res));
        this.router.put("/updateUser/:id",(req,res)=>this.controller.updateUser(req,res));
    }

}