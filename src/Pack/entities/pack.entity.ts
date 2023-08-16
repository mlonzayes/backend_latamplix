import { Column, Entity} from "typeorm";
import { BaseEntity } from "../../Config/base.entity"
import "reflect-metadata"


@Entity({name:'pack'})
export class PackEntity extends BaseEntity{
    @Column()
    pack_name!:string;
    @Column()
    pack_description!:string;
}
