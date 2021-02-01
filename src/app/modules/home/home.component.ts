import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {ITemplateContract} from '../../model/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
