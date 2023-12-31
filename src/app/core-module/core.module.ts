import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
