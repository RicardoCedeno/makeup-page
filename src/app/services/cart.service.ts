import { Injectable } from '@angular/core';
import { CartProduct } from '../classes/cart-product';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList:CartProduct[]=[]

  constructor() { }

  setCart(productList:CartProduct[]){
    this.productList=productList
  }

  getCart(){
    return this.productList
  }

}
