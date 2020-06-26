import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [
  {
  path:"", component: HomeComponent 
},{
    path:"blog", component: BlogComponent
},{
  path: 'posts/:xId', component: PostComponent
}
,{
  path: "travels", component: TravelsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
