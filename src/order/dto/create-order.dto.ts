import { IsString, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  street: string;

  @IsString()
  houseNumber: string;

  @IsOptional()
  @IsString()
  apartmentNumber?: string;

  @IsString()
  postalCode: string;

  @IsString()
  city: string;
}

export class CreateOrderDto {
  @IsString()
  paymentType: string;

  @IsString()
  deliveryType: string;

  @IsString()
  deliveryDate: string;

  @ValidateNested()
  @Type(() => AddressDto)
  deliveryAddress: AddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  users: AddressDto[];
}
