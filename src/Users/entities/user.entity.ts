import { Column, Entity} from "typeorm";
import { BaseEntity } from "../../Config/base.entity"
import "reflect-metadata"


@Entity({name:'user'})
export class UserEntity extends BaseEntity{
    @Column()
    username!:string;
    @Column()
    wallet!:string;
    @Column()
    token!:number;
    @Column()
    token_type!:string
    @Column()
    token_quantity!:string

}

