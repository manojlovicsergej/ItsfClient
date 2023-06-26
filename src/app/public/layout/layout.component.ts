import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private _route : Router) {}

  ngOnInit(): void {}

  route(link : string) {
    console.log(link);
    this._route.navigateByUrl(link);
  }
}
