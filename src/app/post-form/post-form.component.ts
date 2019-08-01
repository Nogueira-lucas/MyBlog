import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../post.model';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();
  posts$: Observable<Post[]>;
  error$ = new Subject<boolean>();
  isWarning: boolean;

  // const formCheckout = new FormGroup({
  //   id: new FormControl(''),
  //   title: new FormControl(''),
  //   content: new FormControl('')
  // }, { updateOn: 'blur' });

  constructor(private postService: PostService) { 
    this.isWarning = false;
  }

  ngOnInit() {
    this.refreshList();
  }
  
  refreshList(){
    this.posts$ = this.postService.getList()
    .pipe( 
      catchError(error=>{
        console.log(error);
        this.error$.next(true);
        //this.formCheckout.reset();
        return empty();
      })
    );
  }

  onCancelIt(form: NgForm){
    form.reset();
    this.isWarning = false;
  }

  onSubmit(form){
    //console.log(this.post);
    this.postService.addPost(this.post).subscribe(success =>{
      this.refreshList();
      this.error$.next(false);
    }, error =>{
      this.error$.next(true);
      this.onCancelIt(); //reset
      return empty();
    },()=>{
      this.onCancelIt(); //reset
      console.log('complete')
    });
  }

  onUpdate(id){
    this.postService.getPostById(id).subscribe(thePost=>{
      this.post.id = thePost.id;
      this.post.title = thePost.title;
      this.post.content = thePost.content;
      this.post.date = thePost.date;
      this.isWarning = true;
    });
  }

  onRemove(id:number){
    this.postService.remove(id).subscribe(()=>{
      this.refreshList();
    });
  }
  // onCreatePost(){
  //   console.log(this.postData.content)
  //   this.postService.addPost(this.postData)
  //   .subscribe(
  //     success =>console.log("sucesso"),
  //     error => console.log("erro"),
  //     ()=>console.log);
  // }
}
