import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes : Routes =
  [
    {
      path: 'welcome',
      component : WelcomePageComponent
    },
    {
      path: '',
      component : HomepageComponent
    }
  ];

@NgModule(
  {
    imports:
      [
        RouterModule.forRoot(routes,
          {
            useHash : false,
            scrollPositionRestoration: 'enabled'
          })
      ],
    exports:
      [
        RouterModule
      ]
  })
export class AppRoutingModule
{
}
