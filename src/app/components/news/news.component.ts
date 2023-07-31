import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor(private router: Router){}
  showNews: boolean = true;
  showNew1: boolean = false;
  showNew2: boolean = false;
  showNew3: boolean = false;
  showNew4: boolean = false;
  ngOnInit() {
    this.showNews = true;
    this.showNew1 = false;
  }
  navigateToNew1(){
    this.showNews = false;
    this.showNew1 = true;
    this.router.navigate(['/new-1']);
    window.scrollTo(0, 0);
  }
  navigateToNew2(){
    this.showNews = false;
    this.showNew2 = true;
    this.router.navigate(['/new-2']);
    window.scrollTo(0, 0);
  }
  navigateToNew3(){
    this.showNews = false;
    this.showNew3 = true;
    this.router.navigate(['/new-3']);
    window.scrollTo(0, 0);
  }
  navigateToNew4(){
    this.showNews = false;
    this.showNew4 = true;
    this.router.navigate(['/new-4']);
    window.scrollTo(0, 0);
  }


}
