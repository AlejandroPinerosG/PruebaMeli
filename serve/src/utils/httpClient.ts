import axios from 'axios';

export class HttpClient {

    private static instance:HttpClient;
    private constructor(){}

    public static getInstance(): HttpClient {
        if (!this.instance){
            this.instance = new HttpClient();
        }
        return this.instance;
    }

    get(url: string): Promise<any> {
        return new Promise(
            (resolve , reject) => {
                axios.get(url).then((res)=>{
                    if (res.status === 200) {
                        resolve(res.data);
                    }
                    reject(res.status);
                }).catch((erno)=>{
                    reject(erno);
                });
            }
        );
    }
    post(url: string, body: any): Promise<any> {
        return axios.post(url, body);
    }
}