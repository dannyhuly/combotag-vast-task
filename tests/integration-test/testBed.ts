import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common/interfaces';
import * as express from 'express';


export class TestBed{

	private _port: number

	public app: INestApplication;
	public instance;

	async bootstrap() {

		this._port = 3000;

		this.instance = express();
		this.app = await NestFactory.create(ApplicationModule, this.instance);
		await this.app.listen(this._port,() => console.log(`TestBed is listening on port ${this._port}.`));
	}

}