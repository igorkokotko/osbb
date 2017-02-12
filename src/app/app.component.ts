/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav class="black-bg">
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        <i class="fa fa-home fa-lg" aria-hidden="true">
        <b>Наш Двір</b></i>
      </a>
      <a class="logination" [routerLink]=" ['./login'] "
        routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        <button type="button" class="btn btn-warning"><span>Залогуватися</span></button>
      </a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/favicon.ico';
  public name = 'Наш Двір';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
