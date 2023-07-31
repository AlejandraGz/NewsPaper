import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { New1Component } from './components/news/new1/new1.component';
import { New2Component } from './components/news/new2/new2.component';
import { New3Component } from './components/news/new3/new3.component';
import { New4Component } from './components/news/new4/new4.component';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'new-1', component: New1Component},
  {path: 'new-2', component: New2Component},
  {path: 'new-3', component: New3Component},
  {path: 'new-4', component: New4Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    New1Component,
    New2Component,
    New3Component,
    New4Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
