import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  isHome = true;
  isNewPost = false;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onIndex(){
    this.isHome = true;
    this.isNewPost = false;
  }

  onPostForm(){
    this.isHome = false;
    this.isNewPost = true;
  }


}
