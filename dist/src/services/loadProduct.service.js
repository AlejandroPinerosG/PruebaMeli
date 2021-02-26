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
exports.LoadProductService = void 0;
const httpClient_1 = require("../utils/httpClient");
const constants_1 = require("../utils/constants");
class LoadProductService {
    get(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.params.query || '';
                let item;
                let objResponse = {
                    author: constants_1.APP.author,
                    items: item
                };
                const result = yield httpClient_1.HttpClient.getInstance().get(constants_1.ENDPOINTS.HOST.concat(constants_1.ENDPOINTS.SEARCH_ITEM.concat(query)));
                if (result) {
                    const resultDescrip = yield httpClient_1.HttpClient.getInstance().get(constants_1.ENDPOINTS.HOST.concat(constants_1.ENDPOINTS.SEARCH_ITEM_DESCRIP.replace(':id', query)));
                    if (resultDescrip) {
                        objResponse.items = {
                            id: result.id,
                            condition: result.condition,
                            free_shipping: result.shipping.free_shipping,
                            picture: result.thumbnail,
                            price: result.price,
                            title: result.title,
                            sold_quantity: result.sold_quantity,
                            description: resultDescrip.plain_text
                        };
                    }
                    console.log("result", objResponse);
                }
                resp.json(objResponse);
            }
            catch (error) {
                console.log("result", error);
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
exports.LoadProductService = LoadProductService;
//# sourceMappingURL=loadProduct.service.js.map