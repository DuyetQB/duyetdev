import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDiv = {
    isShow : false,
    imageSrc:''
  }

  getImage(value:any) {
    this.showDiv.isShow = !this.showDiv.isShow;
    this.showDiv.imageSrc = value.target.src;
  }

  onClose() {
    this.showDiv.isShow = false
  }

}
