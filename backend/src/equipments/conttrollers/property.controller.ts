import express from 'express';
import propertyService from "../services/property.service";
import debug from 'debug';

const log: debug.IDebugger = debug('app:type-controller');

class PropertyController {
    async listProperties(req: express.Request, res: express.Response) {
        const properties = await propertyService.list(100, 0);

        res.status(200).send(properties);
    }

    async listTypeProperties(req: express.Request, res: express.Response) {
        const properties = await propertyService.listByTypeId(req.params.typeId);

        res.status(200).send(properties);
    }

    async createProperty(req: express.Request, res: express.Response) {
        const property = await propertyService.create(req.body);

        res.status(201).send({ property });
    }
}

export default new PropertyController();