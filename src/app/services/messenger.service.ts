import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product: Product): void {
    this.subject.next(product);
  }

  getMsg(): Observable<any> {
   return this.subject.asObservable();
  }

}
