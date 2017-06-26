/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppSharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing';

describe('App: my-ngx-library', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule, AppRoutingModule],
      declarations: [AppComponent, HomeComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    });
  });

  it(
    'should create the app',
    async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
