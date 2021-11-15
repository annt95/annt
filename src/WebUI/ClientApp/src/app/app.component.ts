import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  showHead = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] === '/login' || event['url'] === '/demo') {
            this.showHead = true;
          } else {
            // console.log("NU")
            this.showHead = false;
          }
        }
      });
    }
}
