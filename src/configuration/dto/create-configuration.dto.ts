import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateInternalCombustionConfigurationDto {
  @IsNumber()
  engineCapacity: number;

  @IsNumber()
  fuelTankCapacity: number;

  @IsNumber()
  cuttingHeightLevels: number;
}

export class CreateElectricConfigurationDto {
  @IsNumber()
  cableLength: number;

  @IsNumber()
  bladeCount: number;

  @IsString()
  color: string;
}

export class CreateBatteryConfigurationDto {
  @IsNumber()
  batteryCount: number;

  @IsNumber()
  batteryCapacity: number;

  @IsString()
  color: string;
}

export class CreateConfigurationDto {
  @IsString()
  engineType: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsOptional()
  internalCombustionConfig?: CreateInternalCombustionConfigurationDto;

  @IsOptional()
  electricConfig?: CreateElectricConfigurationDto;

  @IsOptional()
  batteryConfig?: CreateBatteryConfigurationDto;
}
