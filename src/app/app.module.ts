import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { OldPostsComponent } from './old-posts/old-posts.component';
import { PostComponent } from './post-list/post/post.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    OldPostsComponent,
    PostComponent,
    MenuTopComponent,
    FooterComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
