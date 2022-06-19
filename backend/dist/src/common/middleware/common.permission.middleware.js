"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_permissionflag_enum_1 = require("./common.permissionflag.enum");
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:common-permission-middleware');
class CommonPermissionMIddleware {
    permissionFlagRequired(requiredPermissionFlag) {
        return (req, res, next) => {
            try {
                // res.status(200).send(res.locals.jwt.permissionFlags);
                const userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
                if (userPermissionFlags & requiredPermissionFlag) {
                    next();
                }
                else {
                    res.status(403).send();
                }
            }
            catch (e) {
                log(e);
            }
        };
    }
    onlySameUserOrAdminCanDoThisAction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
            if (req.params &&
                req.params.userId &&
                req.params.userId === res.locals.jwt.userId) {
                return next();
            }
            else {
                if (userPermissionFlags & common_permissionflag_enum_1.PermissionFlag.ADMIN_PERMISSION) {
                    return next();
                }
                else {
                    return res.status(403).send();
                }
            }
        });
    }
}
exports.default = new CommonPermissionMIddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBlcm1pc3Npb24ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbWlkZGxld2FyZS9jb21tb24ucGVybWlzc2lvbi5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkVBQThEO0FBQzlELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUV2RSxNQUFNLDBCQUEwQjtJQUM1QixzQkFBc0IsQ0FBQyxzQkFBc0M7UUFDekQsT0FBTyxDQUNILEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCLEVBQzVCLEVBQUU7WUFDQSxJQUFJO2dCQUNBLHdEQUF3RDtnQkFDeEQsTUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FDakMsQ0FBQztnQkFDRixJQUFJLG1CQUFtQixHQUFHLHNCQUFzQixFQUFFO29CQUM5QyxJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFBTTtvQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUMxQjthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUssa0NBQWtDLENBQ3BDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNyRSxJQUNJLEdBQUcsQ0FBQyxNQUFNO2dCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUM3QztnQkFDRSxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILElBQUksbUJBQW1CLEdBQUcsMkNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkQsT0FBTyxJQUFJLEVBQUUsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQzthQUNKO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLDBCQUEwQixFQUFFLENBQUMifQ==