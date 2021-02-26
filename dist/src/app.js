"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const express_1 = __importDefault(require("express"));
const loadlist_service_1 = require("./services/loadlist.service");
const loadProduct_service_1 = require("./services/loadProduct.service");
const cors_1 = __importDefault(require("cors"));
class Application {
    constructor() {
        this.routes = [];
        this.app = express_1.default();
    }
    start() {
        this.loadRoutes();
    }
    loadRoutes() {
        this.routes.push({
            method: new loadlist_service_1.LoadListService(),
            path: '/load/list/:query'
        });
        this.routes.push({
            method: new loadlist_service_1.LoadListService(),
            path: '/load/list/'
        });
        this.routes.push({
            method: new loadProduct_service_1.LoadProductService(),
            path: '/load/product/:query'
        });
        this.addRoutesApp();
    }
    addRoutesApp() {
        this.app.use(cors_1.default(Application.CORS_OPTIONS));
        for (const route of this.routes) {
            this.app.get(route.path, route.method.get);
            this.app.post(route.path, route.method.post);
        }
        this.app.listen(Application.PORT);
    }
}
exports.Application = Application;
Application.PORT = 3000;
Application.CORS_OPTIONS = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//# sourceMappingURL=app.js.map