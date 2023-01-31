import { Component, OnInit } from '@angular/core'
import { NgbNavModule, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbNavConfig], // add NgbNavConfig to the component providers
})
export class HeaderComponent {
  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false
    config.roles = false
  }
}
