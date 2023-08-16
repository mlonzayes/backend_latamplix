import { IsNotEmpty} from "class-validator";
import { BaseDTO } from "../../Config/base.dto";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  username!: string;
  @IsNotEmpty()
  wallet!:string;
 
}
