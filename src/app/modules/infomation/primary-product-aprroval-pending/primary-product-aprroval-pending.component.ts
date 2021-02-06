import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-product-aprroval-pending',
  templateUrl: './primary-product-aprroval-pending.component.html',
  styleUrls: ['./primary-product-aprroval-pending.component.scss']
})
export class PrimaryProductAprrovalPendingComponent implements OnInit {
  isHidden = false;

  constructor() {
  }

  ngOnInit() {
  }

  doActionCreate() {
    this.isHidden = !this.isHidden;
  }
}
