import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../components/note-list/note-list.component';

const routes: Routes = [{ path: 'notes', component: NoteListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NoteListRoutingModule {}
