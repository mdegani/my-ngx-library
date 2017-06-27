import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing';
import { AppSharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MyNgModuleModule } from 'my-ngx-library';

import { MatrixDemoComponent } from './matrix-demo/matrix-demo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MatrixDemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppSharedModule,
    MyNgModuleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
