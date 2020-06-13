import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteListRoutingModule } from './note-list-routing.module';
import { NoteListComponent } from '../components/note-list/note-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NoteListComponent],
  imports: [CommonModule, SharedModule, RouterModule, NoteListRoutingModule],
})
export class NoteListModule {}
