import { Component, Input, OnInit } from '@angular/core';
import { Url } from 'url';
import {Project} from '../utils/interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  @Input() project: Project;

  constructor() {}

  default_Project: Project = 
  {title: "TicTacToe",
  githubLink: "https://github.com/antheismaxenn", 
  liveLink: "https://github.com/antheismaxenn", 
  img: "assets/images/default-project.jpg",
  tech: ["Javascript", "Angular", "Node"], 
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita iste officiis unde doloremque enim impedit quisquam laborum explicabo, quidem repellat placeat libero vel sequi.'
  };
  
  

  ngOnInit(): void {
    this.project = {...this.default_Project, ...this.project};
  }
  
  goTo(url: string){
      window.open(url, "_blank");
  }
  
}

