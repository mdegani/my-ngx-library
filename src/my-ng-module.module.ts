import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyTextDirective } from './directives';
import { EmptyTextService } from './services';
import { HelloComponent } from './components';
import { MatrixComponent } from './components';

// add your angular components here (directives, components, filters, pipes ...)
export const MY_NG_COMPONENTS = [HelloComponent, EmptyTextDirective, MatrixComponent];

// add your services here
const MY_SERVICES = [EmptyTextService];

@NgModule({
  imports: [CommonModule],
  exports: [EmptyTextDirective,
    MatrixComponent],
  declarations: [EmptyTextDirective,
    MatrixComponent]
})
export class MyNgModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyNgModuleModule,
      providers: [MY_SERVICES]
    };
  }
}
