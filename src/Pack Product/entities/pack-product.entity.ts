import { Column, Entity, OneToMany, OneToOne} from "typeorm";
import { BaseEntity } from "../../Config/base.entity"
import "reflect-metadata"
import { ProductEntity } from "../../Product/entities/product.entity";
import { PackEntity } from "../../Pack/entities/pack.entity";


@Entity({name:'pack_product'})
export class PackProductEntity extends BaseEntity{
    @OneToOne(() => PackEntity, pack => pack.id)
    pack!: PackEntity;
    @OneToMany(() => ProductEntity, product => product.id)
    product!: ProductEntity;
}
