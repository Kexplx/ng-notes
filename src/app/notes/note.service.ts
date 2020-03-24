import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteColor } from '../models/note-types.enum';
import { generateId } from '../helpers/helpers';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteStore: { note: Note, temporary: boolean }[];
  noteDeleted: Subject<string>;

  constructor() {
    this.noteStore = JSON.parse(localStorage.getItem('noteStore')) || [];
    this.noteDeleted = new Subject();
  }

  getNotes(includeTemporaryNotes = false): Note[] {
    if (includeTemporaryNotes) {
      return this.noteStore.map(x => x.note);
    } else {
      return this.noteStore.filter(x => !x.temporary).map(x => x.note);
    }
  }

  addNote(): string {
    const note = new Note(generateId(), this.getDefaultNoteName(), new Date().getTime(), '', NoteColor.Color1);
    this.noteStore.push({ note, temporary: true });

    return note.id;
  }

  getNoteById(id: string) {
    const entry = this.noteStore.find(x => x.note.id === id);
    if (entry) {
      return entry.note;
    }

    return null;
  }

  persistNote(id: string) {
    const entry = this.noteStore.find(x => x.note.id === id);
    entry.temporary = false;

    this.persistStore();
  }

  getDefaultNoteName(): string {
    const regex = /Note (\d+)/;
    let currentMax = Number.MIN_VALUE;
    for (let i = 0; i < this.noteStore.length; i++) {
      const result = regex.exec(this.noteStore.filter(x => !x.temporary).map(x => x.note.name)[i]);
      if (result) {
        if (+result[1] > currentMax) {
          currentMax = +result[1];
        }
      }
    }

    currentMax++;
    return 'Note ' + currentMax;
  }

  deleteNote(id: string) {
    const indexToRemove = this.noteStore.findIndex(x => x.note.id === id);
    this.noteStore.splice(indexToRemove, 1);

    this.noteDeleted.next(id);
    this.persistStore();
  }

  persistStore() {
    localStorage.setItem('noteStore', JSON.stringify(this.noteStore));
  }
}
