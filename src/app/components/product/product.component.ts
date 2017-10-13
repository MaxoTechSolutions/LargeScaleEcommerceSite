import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MdSnackBar} from '@angular/material';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { RestuarantService } from '../../services/restuarant.service';
import { CartAction } from '../../store/actions/cart.actions';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  
  products:Product[];
  quantity: number;
  backgroundImg = "https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg";

  
  CartMessage = "Successfully added to the Cart";

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (private productService:RestuarantService, private router:Router, private cartStore: CartAction,public snackBar: MdSnackBar) {
  
  }

  // openSnackBar() {
  //   this.snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: 500,
  //   });
  // }
  
  openSnackBar(message: string, action: string) {
    
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product,quan) {
    
    this.quantity = parseInt(quan);
    // this.productService.addToCart(product)
    console.log(this.quantity)
    this.cartStore.addToCart(product, this.quantity|| 1);
     this.openSnackBar(product.name,this.CartMessage);
  }

  getProductData() {     
     this.productService.getRestuarant().subscribe(products => this.products = products);
     console.log(this.products);
  }

  ngOnInit() {
    // Get initial data from productService to display on the page
    this.getProductData()
  }

}
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   templateUrl: 'snack-bar-component-example-snack.html',
 
// })
// export class PizzaPartyComponent {}