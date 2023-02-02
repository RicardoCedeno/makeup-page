import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/classes/product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:product[]=[]
  product:product= new product()
  constructor(private productsService:ProductsServiceService, private router:Router){}
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productsService.getProducts().subscribe(data=>{
      this.products=data
    })
  }

  getAProduct(id:number){
    this.router.navigate(['product', id])
  }

}
