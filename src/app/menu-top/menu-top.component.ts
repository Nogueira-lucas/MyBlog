import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  public isHome = true;
  isNewPost = false;
  isMainScreen = false;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onIndex(){
    this.isHome = true;
    this.isMainScreen = false;
    this.isNewPost = false;
  }

  onPostForm(){
    this.isHome = false;
    this.isMainScreen = false;
    this.isNewPost = true;
  }

  onMainScreen(){
    this.isHome = false;
    this.isMainScreen = true;
    this.isNewPost = false;
  }

}
