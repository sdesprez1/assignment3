import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <section class="hero is-info is-fullheight is-bold">
  <div class="hero-body">
  <div class="container">

    <h1 class="title">About Page</h1>

  </div>
  </div>
  </section>
`,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
