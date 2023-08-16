import { IsNotEmpty} from "class-validator";
import { BaseDTO } from "../../Config/base.dto";

export class PackDTO extends BaseDTO {
  @IsNotEmpty()
  pack_name!: string;
  @IsNotEmpty()
  pack_description!: string;
}