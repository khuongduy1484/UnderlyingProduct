import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-parameters',
  templateUrl: './contract-parameters.component.html',
  styleUrls: ['./contract-parameters.component.scss']
})
export class ContractParametersComponent implements OnInit {
  page: 1;
  listPages: number[] = [1, 2, 3, 4, 5, 6];
  pageCurrent: number;

  constructor() { }

  ngOnInit() {
  }

  prevPage(page?) {
    // if (this.pageCurrent == 1) {
    //   this.dataSearch.pageCurrent = this.pageCurrent;
    //   this.loadInitData(this.dataSearch).then((data) =>
    //     this.dataSource2.data = [...data])
    //     .catch(error => {
    //       this.dataSource2.data = error;
    //     });
    //   return;
    // }
    // this.pageCurrent--;
    // this.dataSearch.pageCurrent = this.pageCurrent;
    // this.loadInitData(this.dataSearch).then((data) =>
    //   this.dataSource2.data = [...data])
    //   .catch(error => {
    //     this.dataSource2.data = error;
    //   });
  }

  setPage(page?) {
    // this.pageCurrent = page;
    // this.dataSearch.pageCurrent = this.pageCurrent;
    // this.loadInitData(this.dataSearch).then((data) =>
    //   this.dataSource2.data = [...data])
    //   .catch(error => {
    //     this.dataSource2.data = error;
    //   });
  }

  nextPage(page?) {
    // if (this.pageCurrent == this.listPages[this.listPages.length - 1]) {
    //   this.dataSearch.pageCurrent = this.pageCurrent;
    //   this.loadInitData(this.dataSearch).then((data) =>
    //     this.dataSource2.data = [...data])
    //     .catch(error => {
    //       this.dataSource2.data = error;
    //     });
    //   return;
    // }
    // this.pageCurrent++;
    // this.dataSearch.pageCurrent = this.pageCurrent;
    // this.loadInitData(this.dataSearch).then((data) =>
    //   this.dataSource2.data = [...data])
    //   .catch(error => {
    //     this.dataSource2.data = error;
    //   });
  }


}
