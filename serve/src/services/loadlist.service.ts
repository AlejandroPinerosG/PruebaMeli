import { IService } from '../models/i.service';
import { HttpClient } from '../utils/httpClient';
import { IData } from '../models/i.response.service';
import { APP, ENDPOINTS } from '../utils/constants';

export class LoadListService implements IService {

    async get(req?: any, resp?: any): Promise<void> {
        try {
            const query = req.params.query || '';
            let objResponse: IData = {
                author: APP.author,
                categories: [],
                items: []
            };
            const result = await HttpClient.getInstance().get(ENDPOINTS.HOST.concat(ENDPOINTS.SEARCH_LIST.concat(query)));
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
        } catch (error) {
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