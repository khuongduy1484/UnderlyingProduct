import {Component, OnInit} from '@angular/core';
import {ISysParam} from '../../../model/models';
import {SystemParamService} from '../service/systemParam.service';

@Component({
  selector: 'app-group-system',
  templateUrl: './group-system.component.html',
  styleUrls: ['./group-system.component.scss']
})
export class GroupSystemComponent implements OnInit {

  page: number;

  groupSystems: ISysParam [] = [];

  constructor(
    private groupSystemService: SystemParamService
  ) {
  }

  ngOnInit() {
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.groupSystemService.findGroupSystem(current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.groupSystems = data.data;
      }
    });
  }

}
