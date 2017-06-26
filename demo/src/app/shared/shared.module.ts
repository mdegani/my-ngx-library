import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
    imports: [RouterModule, NgbCollapseModule.forRoot() ],
    exports: [ContentWrapperComponent],
    declarations: [ContentWrapperComponent],
    providers: [],
})
export class AppSharedModule { }
