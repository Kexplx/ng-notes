import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface AppStateModel {}

@State<AppStateModel>({
  name: 'appState',
})
@Injectable()
export class AppState {}
