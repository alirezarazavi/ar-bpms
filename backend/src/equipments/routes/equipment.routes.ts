import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import BodyValidationMiddleware from '../../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from "../../auth/middleware/jwt.middleware";
import permissionMiddleware from "../../common/middleware/common.permission.middleware";
import { PermissionFlag } from "../../common/middleware/common.permissionflag.enum";
import EquipmentController from "./../conttrollers/equipment.controller";
import TypeController from "../conttrollers/type.controller";
import BrandController from "../conttrollers/brand.controller";
import PropertyController from "../conttrollers/property.controller";

export class EquipmentRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'EquipmentRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/equipments')
            .get(
                // jwtMiddleware.validJwtNeeded,
                // permissionMiddleware.permissionFlagRequired(
                //     PermissionFlag.ALL_PERMISSIONS
                // ),
                EquipmentController.listEquipment
            )
            .post(
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                EquipmentController.createEquipment
            );
        this.app.route('/equipments/types')
            .get(TypeController.listType)
            .post(TypeController.createType)
        this.app.route('/equipments/types/:typeId/properties')
            .get(
                PropertyController.listTypeProperties
            )
        this.app.route('/equipments/brands')
            .get(BrandController.listBrand)
            .post(BrandController.createBrand)
        this.app.route('/equipments/properties')
            .get(PropertyController.listProperties)
            .post(PropertyController.createProperty)

        return this.app;
    }
}