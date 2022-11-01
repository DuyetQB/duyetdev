import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-presentation',
  templateUrl: './video-presentation.component.html',
  styleUrls: ['./video-presentation.component.css']
})
export class VideoPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  video = {
    isOpen:false
  }

  onOpenVideo(){
    this.video.isOpen = !this.video.isOpen;
  }

  onClose() {
    this.video.isOpen = false
  }

}
