import { createConnection, ConnectionOptions } from 'typeorm';
import { connectionOptions } from '../configuration/db.configuration';

export const DbConnection = Symbol('DbConnectionToken');

export const databaseProviders = [
    {
        provide: DbConnection,
        useFactory: async () => await createConnection(connectionOptions),
    },
];