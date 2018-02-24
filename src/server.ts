import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

import { httpConfiguration } from './configuration/http.configuration'; 

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(httpConfiguration.port);
}
bootstrap();