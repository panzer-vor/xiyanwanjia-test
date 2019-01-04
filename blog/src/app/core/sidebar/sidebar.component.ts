import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routerUri = environment.options.routerUri
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  goto() {
  }
}
