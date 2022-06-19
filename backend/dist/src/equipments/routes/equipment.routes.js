"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentRoutes = void 0;
const common_routes_config_1 = require("../../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../../common/middleware/body.validation.middleware"));
const equipment_controller_1 = __importDefault(require("./../conttrollers/equipment.controller"));
const type_controller_1 = __importDefault(require("../conttrollers/type.controller"));
const brand_controller_1 = __importDefault(require("../conttrollers/brand.controller"));
const property_controller_1 = __importDefault(require("../conttrollers/property.controller"));
class EquipmentRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'EquipmentRoutes');
    }
    configureRoutes() {
        this.app.route('/equipments')
            .get(
        // jwtMiddleware.validJwtNeeded,
        // permissionMiddleware.permissionFlagRequired(
        //     PermissionFlag.ALL_PERMISSIONS
        // ),
        equipment_controller_1.default.listEquipment)
            .post(body_validation_middleware_1.default.verifyBodyFieldsErrors, equipment_controller_1.default.createEquipment);
        this.app.route('/equipments/types')
            .get(type_controller_1.default.listType);
        this.app.route('/equipments/types/:typeId/properties')
            .get(property_controller_1.default.listTypeProperties);
        this.app.route('/equipments/brands')
            .get(brand_controller_1.default.listBrand);
        this.app.route('/equipments/properties')
            .get(property_controller_1.default.listProperties)
            .post(property_controller_1.default.createProperty);
        return this.app;
    }
}
exports.EquipmentRoutes = EquipmentRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lcXVpcG1lbnRzL3JvdXRlcy9lcXVpcG1lbnQucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRFQUF1RTtBQUV2RSxvSEFBMEY7QUFLMUYsa0dBQXlFO0FBQ3pFLHNGQUE2RDtBQUM3RCx3RkFBK0Q7QUFDL0QsOEZBQXFFO0FBRXJFLE1BQWEsZUFBZ0IsU0FBUSx5Q0FBa0I7SUFDbkQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDeEIsR0FBRztRQUNBLGdDQUFnQztRQUNoQywrQ0FBK0M7UUFDL0MscUNBQXFDO1FBQ3JDLEtBQUs7UUFDTCw4QkFBbUIsQ0FBQyxhQUFhLENBQ3BDO2FBQ0EsSUFBSSxDQUNELG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyw4QkFBbUIsQ0FBQyxlQUFlLENBQ3RDLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUM5QixHQUFHLENBQ0EseUJBQWMsQ0FBQyxRQUFRLENBQzFCLENBQUE7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQzthQUNqRCxHQUFHLENBQ0EsNkJBQWtCLENBQUMsa0JBQWtCLENBQ3hDLENBQUE7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzthQUMvQixHQUFHLENBQ0EsMEJBQWUsQ0FBQyxTQUFTLENBQzVCLENBQUE7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzthQUNuQyxHQUFHLENBQ0EsNkJBQWtCLENBQUMsY0FBYyxDQUNwQzthQUNBLElBQUksQ0FDRCw2QkFBa0IsQ0FBQyxjQUFjLENBQ3BDLENBQUE7UUFFTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBeENELDBDQXdDQyJ9