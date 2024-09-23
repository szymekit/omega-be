import { Injectable } from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';

@Injectable()
export class ConfigurationService {
  private configurations = []; // Temporary in-memory storage

  create(createConfigurationDto: CreateConfigurationDto) {
    const newConfiguration = {
      id: Date.now().toString(), // Generate a simple ID
      ...createConfigurationDto,
    };
    this.configurations.push(newConfiguration);
    return newConfiguration;
  }

  findOne(id: string) {
    return this.configurations.find(config => config.id === id);
  }
}
