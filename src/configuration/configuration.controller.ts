import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';

@Controller('configurations')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Post()
  create(@Body() createConfigurationDto: CreateConfigurationDto) {
    return this.configurationService.create(createConfigurationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configurationService.findOne(id);
  }
}
