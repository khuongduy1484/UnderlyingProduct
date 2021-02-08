import {Component, OnInit} from '@angular/core';
import {ProVariableService} from '../../../service/product/proVariable.service';

@Component({
  selector: 'app-prop-variable',
  templateUrl: './prop-variable.component.html',
  styleUrls: ['./prop-variable.component.scss']
})
export class PropVariableComponent implements OnInit {
  page: number;
  contentSearch = '';
  lstPropVariable: any[] = [];
  config: any;

  constructor(
    private proVariableService: ProVariableService
  ) {
  }

  ngOnInit() {
    this.getPageSymbol(0);
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.proVariableService.findPropVariableApproval('', '', '', current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.lstPropVariable = data.data;
      }
    });
  }

  doSearch() {
    this.proVariableService.findPropVariableApproval(this.contentSearch.trim(), '', '', 0, 10).subscribe(data => {
      if (data) {
        this.lstPropVariable = data.data;
      }
    });
  }

}
