import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyTextDirective } from './empty-text.directive';
import { EmptyTextService } from './empty-text.service';

// add your angular components here (directives, components, filters, pipes ...)
export const MY_NG_COMPONENTS = [EmptyTextDirective];

// add your services here
const MY_SERVICES = [EmptyTextService];

@NgModule({
  imports: [CommonModule],
  exports: [MY_NG_COMPONENTS],
  declarations: [MY_NG_COMPONENTS]
})
export class MyNgModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyNgModuleModule,
      providers: [MY_SERVICES]
    };
  }
}
