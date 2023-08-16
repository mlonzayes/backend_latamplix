import { IsNotEmpty} from "class-validator";
import { BaseDTO } from "../../Config/base.dto";

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  description!: string;
  @IsNotEmpty()
  price!:string;
}
