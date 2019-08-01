import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post-list/post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path:'', redirectTo:'/home', pathMatch: 'full'},
    { path:'home', component: HomeComponent },
    { path:'post-list', component: PostListComponent },
    { path:'post-view', component: PostComponent },
    { path:'post-management', component: PostFormComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule{
    
}