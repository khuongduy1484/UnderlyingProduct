import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-policies-products',
  templateUrl: './policies-products.component.html',
  styleUrls: ['./policies-products.component.scss']
})
export class PoliciesProductsComponent implements OnInit {
  isHidden = false;

  constructor() {
  }

  ngOnInit() {
  }

  actionCreate() {
    this.isHidden = !this.isHidden;
  }


}
