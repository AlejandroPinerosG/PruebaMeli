"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new HttpClient();
        }
        return this.instance;
    }
    get(url) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(url).then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                }
                reject(res.status);
            }).catch((erno) => {
                reject(erno);
            });
        });
    }
    post(url, body) {
        return axios_1.default.post(url, body);
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=httpClient.js.map