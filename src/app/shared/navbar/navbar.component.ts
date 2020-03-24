import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() selectedPage: string;
  @Output() itemClicked: EventEmitter<string> = new EventEmitter();

  constructor(private windowRef: WindowRefService, private router: Router) { }

  onExternalLinkClick(url: string) {
    const window = this.windowRef.nativeWindow;
    window.open(url, '_blank');
  }

  onAdd() {
    this.itemClicked.emit('add');
  }

  onSave() {
    this.itemClicked.emit('save');
  }

  onHome() {
    const urlTree = this.router.createUrlTree(['/notes']);
    this.router.navigateByUrl(urlTree);
  }
}
