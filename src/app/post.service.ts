import { Injectable, ErrorHandler} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { Observable} from 'rxjs';
import { retry, catchError, map, delay, tap, take} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PostService{
  loadPosts: Post[];
  private readonly url = `${environment.API}/posts`;
  constructor(private http: HttpClient) { }
  
  getList(){
    return this.http.get<Post[]>(this.url)
    .pipe(
      delay(1000)
    );
  }

  getPostById(id:number){
    return this.http.get<Post>(this.url.concat("/"+id));
  }

  addPost(post: Post){
    post.date = new Date().getDate()
                .toString().concat("/"+ new Date().getMonth()
                .toString().concat("/"+ new Date().getFullYear().toString()))
    if(post.id == null || post.id == 0){
      return this.http.post(this.url, post)
      .pipe(take(1));
    }else{
      return this.http.put(this.url.concat("/"+post.id), post)
      .pipe(take(1));
    }
  }
  
  remove(id: number){
    return this.http.delete(this.url.concat("/"+id))
    .pipe(take(1));
  }

}
