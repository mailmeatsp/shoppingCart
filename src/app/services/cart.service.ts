import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';

const cartUrl = 'https://fakejsonapi.com/fake-api/shoppingcart/productsList';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl);
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, product);
  }

}
