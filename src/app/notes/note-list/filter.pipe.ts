import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteColor } from 'src/app/models/note-types.enum';

export interface Filters {
  name: string;
  color: NoteColor;
  dateSortDirection: string;
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notes: Note[], filters?: Filters): Note[] {
    if (!filters) {
      return notes;
    }

    const { name, color, dateSortDirection } = filters;
    if (filters) {
      notes = notes.filter(note => {
        let includesSearch = true;
        let hasColor = true;

        if (name) {
          includesSearch = note.name.includes(name);
        }

        if (color) {
          hasColor = note.color === color;
        }

        return includesSearch && hasColor;
      });
    }


    notes = (dateSortDirection === 'asc')
      ? notes.sort((a, b) => (a.lastEdited > b.lastEdited) ? 1 : -1)
      : notes;
    return notes;
  }
}
