import { NoteColor } from './note-types.enum';

export class Note {
    constructor(
        public id: string,
        public name: string,
        public lastEdited: number,
        public content: string,
        public color: NoteColor) { }
}
