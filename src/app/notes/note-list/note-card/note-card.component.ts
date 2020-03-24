import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Output() deleteClicked = new EventEmitter();
  @Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteClicked.emit(this.note.id);
  }
}
