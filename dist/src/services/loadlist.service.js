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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadListService = void 0;
const httpClient_1 = require("../utils/httpClient");
const constants_1 = require("../utils/constants");
class LoadListService {
    get(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.params.query || '';
                let objResponse = {
                    author: constants_1.APP.author,
                    categories: [],
                    items: []
                };
                const result = yield httpClient_1.HttpClient.getInstance().get(constants_1.ENDPOINTS.HOST.concat(constants_1.ENDPOINTS.SEARCH_LIST.concat(query)));
                if (result.results) {
                    for (let index = 0; index < 4; index++) {
                        objResponse.items.push({
                            id: result.results[index].id,
                            condition: result.results[index].condition,
                            free_shipping: result.results[index].shipping.free_shipping,
                            picture: result.results[index].thumbnail,
                            price: result.results[index].price,
                            title: result.results[index].title
                        });
                    }
                }
                resp.json(objResponse);
            }
            catch (error) {
                resp.json({
                    error: true,
                    sms: error
                });
            }
        });
    }
    post(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Metodo post LoadListService');
            resp.json({
                test: true
            });
        });
    }
}
exports.LoadListService = LoadListService;
//# sourceMappingURL=loadlist.service.js.map