import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Test 1', qnt: 4, price: 1000 },
    // { id: 2, productId: 3, productName: 'Test 3', qnt: 2, price: 1100 },
    // { id: 3, productId: 5, productName: 'Test 5', qnt: 5, price: 1050 },
    // { id: 4, productId: 2, productName: 'Test 2', qnt: 3, price: 1150 },
    // { id: 5, productId: 4, productName: 'Test 4', qnt: 4, price: 1200 },
    // { id: 6, productId: 6, productName: 'Test 6', qnt: 2, price: 1250 },
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product): void {

    let productExists = false;

    for (const i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qnt++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qnt: 1,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qnt * item.price);
    });
  }

}
