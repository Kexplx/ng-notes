import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { NoteListComponent } from '../notes/note-list/note-list.component';
import { NoteEditorComponent } from '../notes/note-editor/note-editor.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'notes'},
  {path: 'notes', component: NoteListComponent},
  {path: 'notes/:id', component: NoteEditorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
