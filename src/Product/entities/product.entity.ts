import { Column, Entity, JoinColumn, OneToMany} from "typeorm";
import { BaseEntity } from "../../Config/base.entity"
import { CompanyEntity } from "../../Company/entities/company.entity";
import "reflect-metadata"


@Entity({name:'product'})
export class ProductEntity extends BaseEntity{
    @Column()
    name!:string;
    @Column()
    description!:string;
    @Column()
    price!:number;
    @Column()
    company_name!: string

}
