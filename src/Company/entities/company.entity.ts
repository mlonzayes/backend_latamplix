import { Column, Entity, OneToMany} from "typeorm";
import { BaseEntity } from "../../Config/base.entity"
import "reflect-metadata"


@Entity({name:'company'})
export class CompanyEntity extends BaseEntity{
    @Column()
    name!:string;
    @Column()
    type!:string;
    @Column()
    sector!:number;
    @Column()
    email!:string;

}

