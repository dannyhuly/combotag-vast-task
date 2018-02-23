import { Component } from '@nestjs/common';
import * as Joi from 'joi';

@Component()
export class GlobalValidator {

    private readonly IdSchema = Joi.number().integer();

    validateId(num: any): number {
        const result = this.IdSchema.validate<number>(num);
        if (result.error) {
            throw result.error
        }
        return result.value;
    }

}