import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AtosIconButtonComponent } from './atos-icon-button/atos-icon-button.component';
import { AtosTextComponent } from './atos-text/atos-text.component';
import { AtosAvatarComponent } from './atos-avatar/atos-avatar.component';
import { AtosPseudoComponent } from './atos-pseudo/atos-pseudo.component';
import { AtosSizeDirective } from './atos-size.directive';
import { AtosStatusDirective } from './atos-status.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AtosStatusDirective,
    AtosSizeDirective,
    AtosIconButtonComponent,
    AtosTextComponent,
    AtosAvatarComponent,
    AtosPseudoComponent
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    AtosStatusDirective,
    AtosSizeDirective,
    AtosIconButtonComponent,
    AtosTextComponent,
    AtosAvatarComponent,
    AtosPseudoComponent
  ]
})
export class AtosModule {}
