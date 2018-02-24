import { Controller, Get, Post, Res, Query, Body, HttpCode, Inject } from '@nestjs/common';

import { VastControllerValidator } from './vast.controller.validator';
import { GlobalValidator } from '../../services/global.validator'

import { CreateVastDTO } from '../../services/vast/vast.model';
import { VastService } from '../../services/vast/vast.service';

@Controller()
export class VastController {

    constructor(
        private readonly vastService: VastService,
        private readonly vastControllerValidator: VastControllerValidator,
        private readonly globalValidator: GlobalValidator
    ) { }

    @Get('fetch_vast')
    async fetch_vast(@Query() params, @Res() res): Promise<any> {

        let id: number;
        let data: Buffer | string;
         
        //Validation
        try {
            id = this.globalValidator.validateId(params.id);
        }
        catch (e) {
            return res.status(400).json(e);
        }

        //BL
        res.setHeader("content-type", "application/xml")

        try {
            data = await this.vastService.fetchVastXml(id);    
        }
        catch (e) {
            data = this.vastService.featchEmptyVastXml();
        }
        
        return res.end(data);
    
    }

    @HttpCode(204)
    @Post('create_vast')
    async create(@Body() createVastRequest: any, @Res() res): Promise<any> {

        //Validation
        let createVastDTO: CreateVastDTO;
        try {
            createVastDTO = this.vastControllerValidator.validateCreateVastObject(createVastRequest);
        }
        catch (e) {
            return res.status(400).json(e);
        }

        //BL
        try {
            let newVast = await this.vastService.create(createVastDTO);
            return res.json();
        }
        catch (e) {
            return res.status(500).json(e);
        }

    }

}
