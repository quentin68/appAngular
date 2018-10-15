import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MenuModule } from './menu/menu.module';
import { AtosModule } from './atos/atos.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { RagnaGuard } from './services/ragna.guard';
import { UsersService } from './services/users.service';
import { ChangeComponent } from './change/change.component';

const routesConfig: Routes = [
  {
    path: 'home',
    component : LoginComponent,
  },
  {
    path: 'chat/:id',
    component : MainComponent,
    canActivate : [RagnaGuard]
  },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ChangeComponent
  ],
  imports: [
    RouterModule.forRoot(routesConfig),
    BrowserModule,
    MainModule,
    MenuModule,
    AtosModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
