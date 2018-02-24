import { Module } from '@nestjs/common';

import { DatabaseModule } from './repositories/database.module';

import { VastController } from './http/vast/vast.controller';
import { VastControllerValidator } from './http/vast/vast.controller.validator';

import { GlobalValidator } from './services/global.validator';
import { VastService } from './services/vast/vast.service';


@Module({
    controllers: [VastController],
    components: [GlobalValidator, VastControllerValidator, VastService],
    modules: [DatabaseModule]
})
export class ApplicationModule { }