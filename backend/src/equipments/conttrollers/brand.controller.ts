import express from 'express';
import debug from 'debug';
import brandService from "../services/brand.service";

const log: debug.IDebugger = debug('app:brand-controller');

class BrandController {
    async listBrand(req: express.Request, res: express.Response) {
        const brands = await brandService.list(100, 0);
        res.status(200).send(brands);
    }

    async createBrand(req: express.Request, res: express.Response) {
        const brand = await brandService.create(req.body);
        res.status(201).send({ brand });
    }
}

export default new BrandController();