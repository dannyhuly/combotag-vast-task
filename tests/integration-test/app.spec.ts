import * as request from 'supertest';

import { TestBed } from "./testBed";
import { doesNotThrow } from 'assert';

describe('App API', ()=>{

    let testbed = new TestBed;
    testbed.bootstrap();

    describe('APP', ()=>{

        it('should do some thing', (done)=>{
            //integration test
            done();

        })

    })

})