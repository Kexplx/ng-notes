import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './ngxs/app.state';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  imports: [
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([AppState], { developmentMode: !environment.production }),
  ],
})
export class CoreModule {
  /**
   * Throws an error if a second instance of CoreModule is created
   */
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded. Import it only once in AppModule.');
    }
  }
}
