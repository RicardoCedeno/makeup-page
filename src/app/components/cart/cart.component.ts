import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/classes/cart-product';
import { Currency, product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit  {
  constructor(private cartService:CartService) {}
  cart:CartProduct[]
  total:number
  ngOnInit(): void {
    this.getCart()
    this.getTotal()

  }

  getTotal(){
    this.total=this.cart.filter(item=>item.subtotal).reduce((sum,current)=>sum+(+current.subtotal), 0)
    console.log(this.total)
  }

  getCart(){
    this.cart=this.cartService.getCart()
    console.log(this.cart)
  }



}
