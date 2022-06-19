import express from 'express';
import typeService from "../services/type.service";
import debug from 'debug';

const log: debug.IDebugger = debug('app:type-controller');

class TypeController {
    async listType(req: express.Request, res: express.Response) {
        const types = await typeService.list(100, 0);
        res.status(200).send(types);
    }

    async createType(req: express.Request, res: express.Response) {
        const type = await typeService.create(req.body);
        res.status(201).send({ type });
    }
}

export default new TypeController();