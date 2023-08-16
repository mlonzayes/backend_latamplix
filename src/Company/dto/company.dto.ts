import { IsNotEmpty} from "class-validator";
import { BaseDTO } from "../../Config/base.dto";

export class CompanyDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  type!:string;
  @IsNotEmpty()
  sector!:string;
  @IsNotEmpty()
  email!:string;
 
}
