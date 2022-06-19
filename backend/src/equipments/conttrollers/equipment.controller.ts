import express from 'express';
import equipmentService from '../services/equipment.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:equipment-controller');

class EquipmentController {
    async listEquipment(req: express.Request, res: express.Response) {
        const equipments = await equipmentService.list(100, 0);
        res.status(200).send(equipments);
    }

    async createEquipment(req: express.Request, res: express.Response) {
        const equipment = await equipmentService.create(req.body);
        res.status(201).send({ equipment });
    }
}

export default new EquipmentController();