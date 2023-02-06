import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/classes/cart-product';
import { product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  idProduct:number
  product:product = new product()
  numberOfProducts:number=1
  productList:CartProduct[]
  constructor(private route:ActivatedRoute, private productsService:ProductsServiceService, private cartService:CartService) {}
  ngOnInit(): void {
    this.getProductDetails()
    this.productList=this.cartService.productList

  }

  getProductDetails(){
    this.idProduct=this.route.snapshot.params['id']
    this.productsService.getAProduct(this.idProduct).subscribe(data=>{
      this.product=data
    })
  }

  increase(){
    this.numberOfProducts++
  }

  decrease(){
    if(this.numberOfProducts>0){
      this.numberOfProducts--
    }
  }

  addToCart(){
    var cartProduct:CartProduct=new CartProduct()
    cartProduct.id=this.product.id;
    cartProduct.name=this.product.name;
    cartProduct.price=this.product.price;
    cartProduct.image=this.product.api_featured_image
    cartProduct.numberOfProducts=this.numberOfProducts
    cartProduct.subtotal=+cartProduct.price*cartProduct.numberOfProducts
    this.productList.push(cartProduct)
    this.cartService.setCart(this.productList)
  }


}
