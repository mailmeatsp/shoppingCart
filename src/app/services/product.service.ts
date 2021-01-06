import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const apiUrl = 'https://fakejsonapi.com/fake-api/shoppingcart/productsList';

    return this.http.get<Product[]>(apiUrl);
  }
}
