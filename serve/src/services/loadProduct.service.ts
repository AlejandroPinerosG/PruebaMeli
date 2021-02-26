import { IService } from '../models/i.service';
import { HttpClient } from '../utils/httpClient';
import { IProduct, IItem } from '../models/i.response.service';
import { APP, ENDPOINTS } from '../utils/constants';
import { text } from 'express';

export class LoadProductService implements IService {

    async get(req?: any, resp?: any): Promise<void> {
        try {
            const query = req.params.query || '';
            let item: IItem;
            let objResponse: IProduct = {
                author: APP.author,
                items: item
            };
            const result = await HttpClient.getInstance().get(ENDPOINTS.HOST.concat(ENDPOINTS.SEARCH_ITEM.concat(query)));
            if (result) {
                const resultDescrip = await HttpClient.getInstance().get(ENDPOINTS.HOST.concat(ENDPOINTS.SEARCH_ITEM_DESCRIP.replace(':id', query)));
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
        } catch (error) {
            console.log("result", error);
            resp.json({
                error: true,
                sms: error
            });
        }
    }

    async post(req?: any, resp?: any): Promise<void> {
        console.log('Metodo post LoadListService');
        resp.json({
            test: true
        });
    }
}