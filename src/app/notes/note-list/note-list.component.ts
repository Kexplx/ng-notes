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
    trigger('slideInFromLeft', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('200ms ease-out')
      ])
    ]),
    trigger('fadeOut', [
      transition('* => void', [
        animate('400ms ease'),
        style({ opacity: '0' })
      ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
        style({ transform: 'translateY(100%)'}),
        animate('200ms ease-out')
      ])
    ]),
  ]
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  displayEmpty = false;
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
    this.displayEmpty = this.notes.length === 0;
    console.log(this.displayEmpty);
    this.noteService.noteDeleted.subscribe(
      id => {
        this.notes.splice(this.notes.findIndex(x => x.id === id), 1);
        if (this.notes.length === 0) {
          setTimeout(() => {
            this.displayEmpty = true;
          }, 250);
        }
      }
    );
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

  onDeleteClicked(id: string) {
    this.noteService.deleteNote(id);
  }
}
