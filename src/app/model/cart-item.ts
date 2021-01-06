import { Product } from './product';

export class CartItem {
    id: number;
    productId: number;
    productName: string;
    qnt: number;
    price: number;

    constructor(id: number, product: Product, qnt: 1) {
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.qnt = qnt;
    }
}
