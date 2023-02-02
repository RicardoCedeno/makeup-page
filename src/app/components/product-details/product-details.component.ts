import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/classes/product';
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
  constructor(private route:ActivatedRoute, private productsService:ProductsServiceService) {}
  ngOnInit(): void {
    this.getProductDetails()

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


}
