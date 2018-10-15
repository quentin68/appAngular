import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { AtosModule } from '../atos/atos.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AtosModule,
    RouterModule
  ],
  declarations: [MenuComponent, MenuHeaderComponent, MenuContentComponent, MenuFooterComponent],
  exports: [MenuComponent],
})
export class MenuModule { }
