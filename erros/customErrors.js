import { StatusCodes } from 'http-status-codes';

export class NotFoundErrors extends Error {
    constructor(message){
        super(message)
        this.name = 'NotFoundError';
        this.statusCode = StatusCodes.NOT_FOUND
    }
}