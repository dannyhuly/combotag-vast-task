import { Controller, Get, Post, Res, Request, Query, Body, HttpCode } from '@nestjs/common';

import { VastControllerValidator } from './vast.controller.validator';
import { GlobalValidator } from '../../services/global.validator'

import { CreateVastDTO } from '../../services/vast/vast.model';


@Controller()
export class VastController {

    constructor(
        private readonly vastControllerValidator: VastControllerValidator,
        private readonly globalValidator: GlobalValidator
    ) {}

    @Get('fetch_vast')
    get(@Query() params, @Res() res): string {

        let id: number;

        try{
            id = this.globalValidator.validateId(params.id);
        }
        catch(e){
            return res.status(400).json(e);
        }

        console.log(id)
        return res.json(id);

    }

    @HttpCode(204)
    @Post('create_vast')
    create(@Body() createVastRequest: any, @Res() res): string {

        let createVastDTO: CreateVastDTO;

        try{
            createVastDTO = this.vastControllerValidator.validateCreateVastObject(createVastRequest);
        }
        catch(e){
            return res.status(400).json(e);
        }

        console.log(createVastDTO)
        return res.json(createVastDTO);
    }

}
