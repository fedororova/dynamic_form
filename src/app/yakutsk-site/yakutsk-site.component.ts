import { Component, Input, OnInit } from '@angular/core';
import { YakutskPageComponent } from '../yakutsk-edit-page/yakutsk-page.component';

@Component({
  selector: 'app-yakutsk-site',
  templateUrl: './yakutsk-site.component.html',
  styleUrls: ['./yakutsk-site.component.css']
})

export class YakutskSiteComponent implements OnInit {
  public user = JSON.parse(localStorage.getItem('key'));
  constructor() {
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('key'));
  }

}
