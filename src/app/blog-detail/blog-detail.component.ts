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
    imageSrc:'',
    title:''
  }

  getImage(value:any) {
    let idSeven = value.target.parentElement.id;
    this.showDiv.isShow = !this.showDiv.isShow;
    this.showDiv.imageSrc = value.target.src;
    if(idSeven) {
      this.showDiv.title = "Đây là tui khi đeo kính Hololens 2 dô";
      return;
    }
    this.showDiv.title = ""

  }

  onClose() {
    this.showDiv.isShow = false
  }

}
