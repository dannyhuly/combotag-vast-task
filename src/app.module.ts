import { Module } from '@nestjs/common';

import { VastController } from './http/vast/vast.controller';
import { VastControllerValidator } from './http/vast/vast.controller.validator';

import { GlobalValidator } from './services/global.validator';


@Module({
    controllers: [VastController],
    components: [GlobalValidator, VastControllerValidator],
})
export class ApplicationModule {}