import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   prod;

  constructor(private route: ActivatedRoute) {
     window.alert('constructor(private route: ActivatedRoute in this page ');
   }

  ngOnInit() {
    window.alert('ngOnInit() implemnts in this page ');
  this.route.paramMap.subscribe(params => {
    this.prod = products[+params.get('productId')];
    window.alert('You will see prod '+ this.prod.name);
  });
}

}