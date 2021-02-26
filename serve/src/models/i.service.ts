export interface IService {

    get(req?: any , resp?: any): Promise<void>;

    post(req?: any , resp?: any): Promise<void>;

}