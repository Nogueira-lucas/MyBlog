import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Observable, Subscriber, empty, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';
import { ModalService } from '../shared/modal.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  //list: Post[];
  posts$: Observable<Post[]>;
  error$ = new Subject<boolean>();
  
  constructor(
    private postService: PostService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    //this.postService.simpleList()
    //.subscribe(dado => this.list = dado);
    this.reafreshList();
  }

  reafreshList(){
    this.posts$ = this.postService.getList()
    .pipe( 
      catchError(error=>{
        console.log(error);
        this.error$.next(true);
        this.modalService.handleError("danger", "Error on get List");
        return empty();
      })
    );
  }

}
