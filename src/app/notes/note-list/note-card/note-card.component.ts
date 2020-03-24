import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteColor } from 'src/app/models/note-types.enum';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note;
  constructor() { }

  ngOnInit(): void {
  }
}
