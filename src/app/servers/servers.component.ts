import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
  // selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Tehtävä 37. Working with component templates:
  // template: `
  // <section>
  //   <h1>I'm in the Servers Component</h1>
  //   <p>Below this I have 2 Server Components</p>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // </section>
  // `,