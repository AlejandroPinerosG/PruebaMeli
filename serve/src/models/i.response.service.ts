export interface IAuthor {
    name: string;
    lastname: string;
}

export interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}

export interface IItem {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
}

export interface IData {
    author: IAuthor;
    categories: string[];
    items: IItem[];
}

export interface IProduct {
    author: IAuthor;
    items: IItem;
}
