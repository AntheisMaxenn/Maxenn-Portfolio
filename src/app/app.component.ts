import { AfterViewInit, Component } from '@angular/core';
import { Project} from './utils/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'maxennPortfolio3';

  project: Project[] = [{
    title: "Auth/CRUD",
    githubLink: "https://github.com/AntheisMaxenn/CRUD-Frontend", 
    liveLink: "https://auth-crud-angular.web.app/", 
    img: "assets/images/authCRUD.jpg", 
    tech: ["Angular", "TypeScript", "Javascript","Express.Js", "Bcrypt", "Authentication", "JWT", "MySQL", "GCP"],
    desc: `FullStack project implementing JWT's with Frontend local storage. Backend Express.Js server implements its own authentication middleware with bcrypt. All backend data is persistent with a MySQL database.`
  },{
    title: "CHATSY",
    githubLink: "https://github.com/AntheisMaxenn/Chatsy1.0-frontend", 
    liveLink: "https://chatsy-65da0.web.app/start", 
    img: "assets/images/chatsy1.jpg", 
    tech: ["Angular", "TypeScript", "Javascript", "ExpressJs", "WebSocket", "Socket.IO", "GCP"],
    desc: `Realtime chat application where users can make an alias/username to join, then are able to chat with other online users. The server uses Socket.io deployed to a GCP App Engine.`
  },{
    title: "Simple Expense Tracker",
    githubLink: "https://github.com/AntheisMaxenn/expenseTracker", 
    liveLink: "https://expense-tracker-a437d.web.app/", 
    img: "assets/images/expenseTracker1.jpg", 
    tech: [ "TypeScript", "Javascript", "Angular", "CRUD", "Material"],
    desc: `A Simple expense tracker. The project was kept DRY through effective component use and encapsulation. The project also included Material styling and Popup Modal.`
  },
]

  targets;
  
  ngAfterViewInit(){
    this.targets = document.querySelectorAll('.animate');
      const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
          
          if(entry.intersectionRatio > 0) {
            entry.target.classList.add('animateMe');
          } else {
            entry.target.classList.remove('animateMe');
          }

        })
    })

    this.targets.forEach(h1 => {
        observer.observe(h1)
    })
  }


};
