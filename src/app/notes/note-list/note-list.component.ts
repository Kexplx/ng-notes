import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Note } from 'src/app/models/note.model';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],

  animations: [
    trigger('zoomIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ])
    ])
  ]
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
    this.displayEmpty = this.notes.length === 0;
  }

  handleAction(action: string) {
    switch (action) {
      case 'add':
        const noteId = this.noteService.addNote();
        const urlTree = this.router.createUrlTree(['notes', noteId]);
        this.router.navigateByUrl(urlTree);
        break;

      default:
        console.log('Invalid action.');
        break;
    }
  }
}
