import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }



  ngOnInit(): void {
  }

  scrollTo(ref: string) {

    document.getElementById(ref).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  goTo(url: string){
    window.open(url, "_blank");
  }
}
