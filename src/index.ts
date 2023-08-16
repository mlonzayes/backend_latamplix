import "reflect-metadata"
import express from "express"
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from "./Config/config.server";
import {DataSource} from "typeorm";
import { UserRouter } from "./Users/user.router";
import { CompanyRouter } from "./Company/company.router";
import { PackRouter } from "./Pack/pack.router";
import { ProductRouter } from "./Product/product.router";
import { PackProductRouter } from "./Pack Product/pack-product.router";


class ServerBootstrap extends ConfigServer{
    public app:express.Application=express()
    private port:number=3000
    constructor(){
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(morgan("dev"));
        this.app.use(cors({
            origin: true,
            methods: "GET,HEAD,PUT,POST,DELETE,OPTIONS",
            credentials: true,
        }));
        this.app.use("/api",this.routers());
        this.dbConnect()
        this.listen();
    }

    routers():Array<express.Router>{
        return[
            new UserRouter().router,
            new CompanyRouter().router,
            new PackRouter().router,
            new ProductRouter().router,
            new PackProductRouter().router
        ]
    }
    
    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
          .then(() => {
            console.log("connection successfully!");
          })
          .catch((err) => {
            console.error(err);
          });
      }


    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`sever listening on port ${this.port}`);
        });
    }
}



new ServerBootstrap()