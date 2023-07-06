import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { LayoutContainerComponent } from './shared-module/layout/layout-container/layout-container.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
