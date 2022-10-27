import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
   { path: 'article', component: ArticleComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about-me', component: AboutMeComponent },
   { path: 'blog-detail', component: BlogDetailComponent },
   { path: 'contact-me', component: ContactMeComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'project', component: ProjectComponent },
  //  { path: 'blog-detail/:id', component: BlogDetailComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    HomeComponent,
    BlogDetailComponent,
    AboutMeComponent,
    BlogComponent,
    ProjectComponent,
    ContactMeComponent,
    LayoutComponent
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     BannerComponent,
//     ArticleComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
