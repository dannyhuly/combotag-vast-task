import { Component } from '@nestjs/common';
import * as Joi from 'joi';

import { VastPosition, CreateVastDTO } from '../../services/vast/vast.model'


@Component()
export class VastControllerValidator {

    private readonly vastPositionOptions: Array<string> = Object.keys(VastPosition).map(k => VastPosition[k as string])

    private readonly createVastSchema = Joi.object().keys({
        vast_url: Joi.string().uri().required(),
        position: Joi.string().valid(this.vastPositionOptions).default(VastPosition.BOTTOM_RIGHT),
        hide_ui: Joi.boolean().required()
    })

    validateCreateVastObject(obj: any): CreateVastDTO {
        const result = this.createVastSchema.validate<CreateVastDTO>(obj);
        if (result.error) {
            throw result.error
        }
        return result.value;
    }

}