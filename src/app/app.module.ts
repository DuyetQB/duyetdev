import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
   { path: 'article', component: ArticleComponent },
   { path: 'home', component: HomeComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
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
    HomeComponent
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
