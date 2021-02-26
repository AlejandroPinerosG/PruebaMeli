
import express from 'express';
import { ILoadPath } from './models/i.loadPath';
import { LoadListService } from './services/loadlist.service';
import { LoadProductService } from './services/loadProduct.service';
import cors from 'cors';

export class Application {

    private app: any;
    private static PORT = 3000;
    private routes: ILoadPath[] = [];
    private static CORS_OPTIONS = {
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }

    constructor() {
        this.app = express();
    }

    public start(): void {
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.routes.push({
            method : new LoadListService(),
            path : '/load/list/:query'
        });
        this.routes.push({
            method : new LoadListService(),
            path : '/load/list/'
        });
        this.routes.push({
            method : new LoadProductService(),
            path : '/load/product/:query'
        });

        this.addRoutesApp();
    }

    private addRoutesApp(): void {
        this.app.use(cors(Application.CORS_OPTIONS));
        for (const route of this.routes) {
            this.app.get(route.path , route.method.get );
            this.app.post(route.path , route.method.post );
        }
        this.app.listen(Application.PORT);
    }

}