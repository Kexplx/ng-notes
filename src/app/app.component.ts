import { Component } from '@angular/core';
import { NbSidebarModule, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-template';

  constructor(private sidebar: NbSidebarService) {}

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
