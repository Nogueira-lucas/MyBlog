import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { OldPostsComponent } from './old-posts/old-posts.component';
import { PostComponent } from './post-list/post/post.component';
import { FormsModule } from '@angular/forms';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';
import { PostFormComponent } from './post-form/post-form.component';
import { RoutingModule } from './app.route.module';
import { HomeComponent } from './home/home.component';
import { PostService } from './post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    OldPostsComponent,
    PostComponent,
    MenuTopComponent,
    FooterComponent,
    PostFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
