import { Component, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';
import * as request from 'request';

import { VastPosition, CreateVastDTO } from './vast.model';
import { Vast } from '../../repositories/entities/vast.entity'
import { DbConnection } from '../../repositories/database.providers';

@Component()
export class VastService {

    private static readonly EMPTY_VAST = '<VAST version="2.0"></VAST>';

    constructor(
        @Inject(DbConnection) private readonly dbConnection: Connection
    ) { }

    async findById(id: number): Promise<Vast> {

        let vast = await this.dbConnection.manager.findOneById(Vast, id);

        if (!vast) {
            //TODO: add custome exseptions to service
            console.log(`Unable to find VAST with id ${id}`)
            throw new Error('Unable to find VAST');
        }

        return vast;
    }

    fetchVastXml(id: number): Promise<Buffer | string> {

        return new Promise<Buffer | string>((resolve, reject) => {

            this.findById(id)
                .then((vast) => {

                    let req = request.get(vast.vast_url)
                        .on('error', (err) => {
                            reject(err);
                        })
                        .on('data', (data) => {
                            resolve(data);
                        });

                })
                .catch((e) => {
                    reject(e);
                });

        });

    }

    featchEmptyVastXml() : string{
        return VastService.EMPTY_VAST;
    }

    async create(createVastDTO: CreateVastDTO): Promise<Vast> {
        const newVast = new Vast();
        newVast.hide_ui = createVastDTO.hide_ui;
        newVast.position = createVastDTO.position;
        newVast.vast_url = createVastDTO.vast_url;

        let vast = await this.dbConnection.manager.save(newVast)
        return vast;
    }

}