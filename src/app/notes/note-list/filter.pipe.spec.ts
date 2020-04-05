import { FilterPipe, Filters } from './filter.pipe';
import { Note } from 'src/app/models/note.model';
import { NoteColor } from 'src/app/models/note-types.enum';

describe('FilterPipe', () => {
  let notes: Note[];

  let pipe: FilterPipe;

  beforeEach(() => {
    notes = [
      new Note('', 'Foo', new Date(2020, 3, 11).getTime(), '', NoteColor.Color1),
      new Note('', 'Foobar', new Date(2020, 2, 11).getTime(), '', NoteColor.Color2),
      new Note('', 'Fee', new Date(2020, 1, 11).getTime(), '', NoteColor.Color3),
    ];

    pipe = new FilterPipe();
  });

  it('providing no filters returns all notes', () => {
    expect(pipe.transform(notes)).toBe(notes);
  });

  it('providing a name filter "Foo" only returns notes with name containing "Foo"', () => {
    const filters: Filters = { name: 'Foo', color: null, dateSortDirection: null };
    expect(pipe.transform(notes, filters).filter(x => !x.name.includes('Foo')).length).toBe(0);
  });

  it('providing a color filter Color1 only returns notes with color == Color1', () => {
    const filters: Filters = { name: null, color: NoteColor.Color1, dateSortDirection: null };
    expect(pipe.transform(notes, filters).filter(x => x.color !== NoteColor.Color1).length).toBe(0);
  });

  it('providing a dateFilterDirection "desc" returns descendding', () => {
    const filters: Filters = { name: null, color: null, dateSortDirection: 'asc' };
    const filtered = pipe.transform(notes, filters);

    const result = filtered[0].lastEdited < filtered[1].lastEdited && filtered[1].lastEdited < filtered[2].lastEdited;
    expect(result).toBe(true);
  });
});
