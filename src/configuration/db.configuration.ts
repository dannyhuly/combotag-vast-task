import { ConnectionOptions } from 'typeorm';

//TOOD: this file need to be generated dynamicly acording to ENV on build command.

export const connectionOptions: ConnectionOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 32770,
    "username": "root",
    // "password": "",
    "database": "ComboGuard",
    "synchronize": true, //Purge DB and creates entity
    "logging": true,
    "entities": [
        "src/repositories/**/*entity.ts"
    ]
}