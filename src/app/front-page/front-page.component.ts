import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.pug',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  title = 'example-of-pug';

  constructor() { }

  ngOnInit() {
  }

}
