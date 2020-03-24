import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class NotFoundComponent implements OnInit {
  routeSnapshot: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.routeSnapshot = this.route.snapshot.url.toString();
  }

}
