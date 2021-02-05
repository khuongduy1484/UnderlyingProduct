import {Component, OnInit} from '@angular/core';
import {GroupSystemService} from '../../../service/system/groupSystem.service';
import {IGroupContract} from '../../../model/models';

@Component({
  selector: 'app-group-system',
  templateUrl: './group-system.component.html',
  styleUrls: ['./group-system.component.scss']
})
export class GroupSystemComponent implements OnInit {

  page: number;

  groupSystems: IGroupContract [] = [];

  constructor(
    private groupSystemService: GroupSystemService
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
