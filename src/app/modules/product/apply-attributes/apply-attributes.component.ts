import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-attributes',
  templateUrl: './apply-attributes.component.html',
  styleUrls: ['./apply-attributes.component.scss']
})
export class ApplyAttributesComponent implements OnInit {

  startDate: Date;
  endtDate: Date;
  constructor() { }

  ngOnInit() {
  }

}
